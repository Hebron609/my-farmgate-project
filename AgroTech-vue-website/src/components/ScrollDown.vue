<template>
  <div class="scrolldown">
    <div class="chevrons">
      <div class="chevrondown"></div>
      <div class="chevrondown"></div>
    </div>
  </div>
</template>

<style scoped>
.scrolldown {
  --color: yellow;
  --sizeX: 26px;
  --sizeY: 42px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-inline: auto;
  margin-bottom: 16px;
}

.scrolldown::before {
  content: "";
  position: absolute;
  bottom: 25px;
  left: 50%;
  width: 5px;
  height: 5px;
  margin-left: -2.5px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-shadow: 0px -5px 3px 1px #ffffff66;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 5px;
  }
  40% {
    opacity: 1;
    height: 9px;
  }
  80% {
    transform: translateY(16px);
    height: 9px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
}

.chevrons {
  padding-top: 5px;
  margin-left: -2.5px;
  margin-top: 42px;
  width: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -5px;
  position: relative;
  border: solid var(--color);
  border-width: 0 2.5px 2.5px 0;
  display: inline-block;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse 500ms ease infinite alternate 250ms;
}

@keyframes pulse {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
</style>
