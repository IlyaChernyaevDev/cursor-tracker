<template>
    <component
        :is="computedTag"
        :class="classes"
        :style="{ color }"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'p' | 'span';
    size?: 'xl' | 'xxl' | 'l' | 'm' | 's' | 'xs';
    weight?: '400' | '500' | '600' | '700';
    decoration?: 'underline' | 'line-through' | 'none';
    color?: string;
    inline?: boolean;
    block?: boolean;
    lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
    textAlign?: 'left' | 'right' | 'justify' | 'center';
    capitalize?: boolean;
    lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
    href?: string;
}

const defaultProps = withDefaults(defineProps<Props>(), {
    tag: 'p',
    size: 'm',
    weight: '400',
    decoration: 'none',
    color: '#000000',
    textAlign: 'left',
    lineClamp: undefined,
    capitalize: false,
    lineHeight: 'normal',
    href: undefined,
});

const classes = [
    defaultProps.tag && `font-${defaultProps.tag}`,
    defaultProps.size && `text-${defaultProps.size}`,
    defaultProps.weight && `font-${defaultProps.weight}`,
    defaultProps.tag === 'a' && 'text-link',
    defaultProps.decoration && `text-decoration-${defaultProps.decoration}`,
    defaultProps.inline && 'inline',
    defaultProps.block && 'block',
    defaultProps.textAlign && `text-${defaultProps.textAlign}`,
    defaultProps.lineClamp && `line-clamp-${defaultProps.lineClamp}`,
    defaultProps.capitalize && 'capitalize',
    defaultProps.lineHeight && `line-height-${defaultProps.lineHeight}`,
];

const computedTag = computed(() => {
    if (defaultProps.tag === 'a' && !defaultProps.href) {
        console.warn('Href attribute is required for anchor tags');
    }
    return defaultProps.tag;
});
</script>

<style scoped>
/* Font sizes */
.text-xxl { font-size: 32px; }
.text-xl { font-size: 24px; }
.text-l { font-size: 20px; }
.text-m { font-size: 16px; }
.text-s { font-size: 14px; }
.text-xs { font-size: 12px; }

/* Font weights */
.font-500 { font-weight: 500; }
.font-600 { font-weight: 600; }
.font-400 { font-weight: 400; }
.font-700 { font-weight: 700; }

/* Line heights */
.line-height-tight { line-height: 1.25; }
.line-height-normal { line-height: 1.5; }
.line-height-relaxed { line-height: 1.75; }
.line-height-loose { line-height: 2; }

/* Text alignment */
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
.text-center { text-align: center; }

/* Line clamp */
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

.line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

.line-clamp-5 {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

.line-clamp-6 {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

/* Text decorations */
.text-link {
    text-decoration: underline;
}

.text-decoration-line-through {
    text-decoration: line-through;
}

.text-decoration-underline {
    text-decoration: underline;
}

.text-decoration-none {
    text-decoration: none;
}

/* Display */
.inline {
    display: inline;
}

.block {
    display: block;
}

/* Text transform */
.capitalize {
    text-transform: capitalize;
}

/* Default styles for elements */
h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

p {
    margin: 0;
}

a {
    color: inherit;
    cursor: pointer;
}
</style>
