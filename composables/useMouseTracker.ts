interface MouseCoordinates {
    x: number;
    y: number;
    sourceType: 'mouse' | 'touch' | null;
}

const STORAGE_KEY = 'last-mouse-coordinates';
const CHANNEL_NAME = 'mouse-coordinates';

export const useMouseTracker = () => {
    const getInitialCoordinates = (): MouseCoordinates => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }

        return { x: 0, y: 0, sourceType: null };
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
            sourceType: 'mouse',
        };

        updateCoordinates(newCoordinates);
    };

    const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 0) {
            const touch = event.touches[0];
            const newCoordinates: MouseCoordinates = {
                x: touch.clientX,
                y: touch.clientY,
                sourceType: 'touch',
            };

            updateCoordinates(newCoordinates);
        }
    };

    const updateCoordinates = (newCoordinates: MouseCoordinates) => {
        coordinates.value = newCoordinates;
        broadcastChannel?.postMessage(newCoordinates);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCoordinates));
    };

    const startTracking = () => {
        initBroadcastChannel();

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        window.addEventListener('touchstart', handleTouchMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        broadcastChannel?.postMessage({
            x: coordinates.value.x,
            y: coordinates.value.y,
            sourceType: coordinates.value.sourceType,
        });
    };

    const stopTracking = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchstart', handleTouchMove);
        window.removeEventListener('touchmove', handleTouchMove);
        broadcastChannel?.close();
        broadcastChannel = null;
    };

    return {
        coordinates: readonly(coordinates),
        startTracking,
        stopTracking,
    };
};
