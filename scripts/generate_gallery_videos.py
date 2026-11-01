#!/usr/bin/env python3
"""
Generate cinematic motion reels for FarmGate gallery video section using ffmpeg.
Creates 3 high-definition, web-optimized 1080p MP4 reels with Ken Burns motion & crossfade transitions.
"""

import os
import subprocess
import shutil

OUTPUT_DIR = "public/videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)
TEMP_DIR = "/tmp/farmgate_video_render"
if os.path.exists(TEMP_DIR):
    shutil.rmtree(TEMP_DIR)
os.makedirs(TEMP_DIR, exist_ok=True)

REELS = [
    {
        "id": "vid-okra-irrigation",
        "output_filename": "danso-okra-irrigation.mp4",
        "title": "Danso Lady's Finger Okra & Drip Irrigation Operations",
        "shots": [
            ("public/images/gallery/danso_okra_harvest.webp", "zoom_in", 4.2),
            ("public/images/gallery/danso_okra_basket.webp", "pan_right", 4.2),
            ("src/assets/img/farm-irrigation.webp", "zoom_out", 4.2),
            ("src/assets/img/crop-planting.webp", "pan_left", 4.2),
            ("src/assets/img/farm-tractor1.webp", "zoom_in", 4.2),
        ],
    },
    {
        "id": "vid-rice-canals",
        "output_filename": "asutsuare-rice-canals.mp4",
        "title": "Asutsuare Rice Farm & Canal Water Flow",
        "shots": [
            ("src/assets/img/rice1.webp", "zoom_in", 4.2),
            ("src/assets/img/rice2.webp", "pan_right", 4.2),
            ("src/assets/img/farm-crops.webp", "zoom_out", 4.2),
            ("src/assets/img/farm-pic9.webp", "pan_left", 4.2),
            ("src/assets/img/farm-pic6.webp", "zoom_in", 4.2),
        ],
    },
    {
        "id": "vid-tilapia-cages",
        "output_filename": "volta-tilapia-cages.mp4",
        "title": "Volta Lake Deep-Water Tilapia Cage Infrastructure",
        "shots": [
            ("public/images/gallery/Fishery4.webp", "zoom_in", 4.2),
            ("public/images/gallery/Fishery1.webp", "pan_right", 4.2),
            ("public/images/gallery/Fishery2.webp", "zoom_out", 4.2),
            ("public/images/gallery/tilapia_feeding.webp", "pan_left", 4.2),
            ("public/images/gallery/aquaculture_harvest.webp", "zoom_in", 4.2),
        ],
    },
]

def render_shot(img_path, out_mp4, duration, effect):
    fps = 30
    total_frames = int(duration * fps)

    if effect == "zoom_in":
        zp = f"zoompan=z='min(zoom+0.0012,1.20)':d={total_frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps={fps}"
    elif effect == "zoom_out":
        zp = f"zoompan=z='if(lte(on,1),1.20,max(1.001,zoom-0.0012))':d={total_frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps={fps}"
    elif effect == "pan_right":
        zp = f"zoompan=z='1.15':d={total_frames}:x='(on/{total_frames})*(iw-iw/zoom)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps={fps}"
    else:  # pan_left
        zp = f"zoompan=z='1.15':d={total_frames}:x='(1-on/{total_frames})*(iw-iw/zoom)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps={fps}"

    cmd = [
        "ffmpeg", "-y",
        "-loop", "1",
        "-i", img_path,
        "-vf", f"scale=2880:1620:force_original_aspect_ratio=increase,crop=2880:1620,{zp}",
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "22",
        "-t", str(duration),
        "-pix_fmt", "yuv420p",
        out_mp4
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def render_reel(reel, reel_idx):
    print(f"\n--- Rendering Reel {reel_idx+1}/3: {reel['title']} ---")
    clip_files = []
    durations = []

    for s_idx, (img, effect, dur) in enumerate(reel["shots"]):
        c_path = os.path.join(TEMP_DIR, f"reel_{reel_idx}_shot_{s_idx}.mp4")
        print(f"  > Shot {s_idx+1}/{len(reel['shots'])}: {os.path.basename(img)} ({effect})")
        render_shot(img, c_path, dur, effect)
        clip_files.append(c_path)
        durations.append(dur)

    trans_dur = 0.8
    # Build xfade filtergraph
    # offset_i = (prev offset) + (dur_prev - trans_dur)
    filter_parts = []
    current_label = "0:v"
    current_offset = 0.0

    for i in range(1, len(clip_files)):
        prev_dur = durations[i - 1]
        if i == 1:
            current_offset = prev_dur - trans_dur
        else:
            current_offset = current_offset + (prev_dur - trans_dur)

        next_label = f"v{i}"
        filter_parts.append(
            f"[{current_label}][{i}:v]xfade=transition=fade:duration={trans_dur:.1f}:offset={current_offset:.2f}[{next_label}]"
        )
        current_label = next_label

    filter_complex = ";".join(filter_parts)
    final_output = os.path.join(OUTPUT_DIR, reel["output_filename"])

    cmd = ["ffmpeg", "-y"]
    for c in clip_files:
        cmd.extend(["-i", c])

    # Silent audio source for proper HTML5 media element handling
    cmd.extend([
        "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
        "-filter_complex", filter_complex,
        "-map", f"[{current_label}]",
        "-map", f"{len(clip_files)}:a",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "22",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-movflags", "+faststart",
        final_output
    ])

    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    size_mb = os.path.getsize(final_output) / (1024 * 1024)
    print(f"  ✓ Successfully created {final_output} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    for idx, r in enumerate(REELS):
        render_reel(r, idx)
    # Cleanup temp directory
    shutil.rmtree(TEMP_DIR, ignore_errors=True)
    print("\nAll 3 video reels generated successfully!")

