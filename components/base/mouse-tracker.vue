<template>
    <div class="mouse-tracker">
        <BaseTypo
            tag="h1"
            size="xl"
            weight="600"
            class="title"
        >
            Mouse Coordinates
        </BaseTypo>

        <div class="coordinates">
            <BaseTypo
                tag="p"
                size="l"
                weight="500"
            >
                X: {{ coordinates.x }}
            </BaseTypo>

            <BaseTypo
                tag="p"
                size="l"
                weight="500"
            >
                Y: {{ coordinates.y }}
            </BaseTypo>
        </div>

        <BaseTypo
            tag="a"
            size="m"
            weight="500"
            color="#2563eb"
            decoration="underline"
            class="open-tab-link"
            href="/"
            @click.prevent="openNewTab"
        >
            Открыть в новой вкладке для проверки синхронизации
        </BaseTypo>
    </div>
</template>

<script setup lang="ts">
import { useMouseTracker } from '~/composables/useMouseTracker';

const { coordinates, startTracking, stopTracking } = useMouseTracker();

const openNewTab = () => {
    if (import.meta.client) {
        localStorage.setItem('last-mouse-coordinates', JSON.stringify(coordinates.value));
    }
    window.open(window.location.href, '_blank');
};

onMounted(() => {
    startTracking();
});

onUnmounted(() => {
    stopTracking();
});
</script>

<style scoped>
.mouse-tracker {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.coordinates {
  display: flex;
  gap: 2rem;
}

.hint {
  margin-top: 2rem;
  opacity: 0.7;
}

.open-tab-link {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.open-tab-link:hover {
  opacity: 0.7;
}
</style>
