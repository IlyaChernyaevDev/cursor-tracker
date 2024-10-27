interface MouseCoordinates {
    x: number;
    y: number;
}

const STORAGE_KEY = 'last-mouse-coordinates';
const CHANNEL_NAME = 'mouse-coordinates';

export const useMouseTracker = () => {
    const getInitialCoordinates = (): MouseCoordinates => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }

        return { x: 0, y: 0 };
    };

    const coordinates = ref<MouseCoordinates>(getInitialCoordinates());
    let broadcastChannel: BroadcastChannel | null = null;

    const initBroadcastChannel = () => {
        broadcastChannel = new BroadcastChannel(CHANNEL_NAME);

        broadcastChannel.onmessage = (event: MessageEvent<MouseCoordinates>) => {
            coordinates.value = event.data;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(event.data));
        };
    };

    const handleMouseMove = (event: MouseEvent) => {
        const newCoordinates: MouseCoordinates = {
            x: event.clientX,
            y: event.clientY,
        };

        coordinates.value = newCoordinates;
        broadcastChannel?.postMessage({
            x: newCoordinates.x,
            y: newCoordinates.y,
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCoordinates));
    };

    const startTracking = () => {
        initBroadcastChannel();
        window.addEventListener('mousemove', handleMouseMove);
        broadcastChannel?.postMessage({
            x: coordinates.value.x,
            y: coordinates.value.y,
        });
    };

    const stopTracking = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        broadcastChannel?.close();
        broadcastChannel = null;
    };

    return {
        coordinates: readonly(coordinates),
        startTracking,
        stopTracking,
    };
};
