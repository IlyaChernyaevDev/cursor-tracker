<template>
    <component
        :is="computedTag"
        :class="classes"
        :style="computedStyle"
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
    lineClamp?: number;
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

const classes = computed(() => [
    defaultProps.tag && `font-${defaultProps.tag}`,
    defaultProps.size && `text-${defaultProps.size}`,
    defaultProps.weight && `font-${defaultProps.weight}`,
    defaultProps.tag === 'a' && 'text-link',
    defaultProps.decoration && `text-decoration-${defaultProps.decoration}`,
    defaultProps.inline && 'inline',
    defaultProps.block && 'block',
    defaultProps.textAlign && `text-${defaultProps.textAlign}`,
    defaultProps.lineClamp && 'line-clamp',
    defaultProps.capitalize && 'capitalize',
    defaultProps.lineHeight && `line-height-${defaultProps.lineHeight}`,
]);

const computedTag = computed(() => {
    if (defaultProps.tag === 'a' && !defaultProps.href) {
        console.warn('Href обязательный атрибут для ссылок');
    }
    return defaultProps.tag;
});

const computedStyle = computed(() => ({
    color: defaultProps.color,
    ...(defaultProps.lineClamp && {
        '-webkit-line-clamp': defaultProps.lineClamp,
    }),
}));
</script>

<style lang="scss" scoped>
$font-sizes: (
    'xxl': 32px,
    'xl': 24px,
    'l': 20px,
    'm': 16px,
    's': 14px,
    'xs': 12px
);

$font-weights: (
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700
);

$line-heights: (
    'tight': 1.25,
    'normal': 1.5,
    'relaxed': 1.75,
    'loose': 2
);

@each $size, $value in $font-sizes {
    .text-#{$size} {
        font-size: $value;
    }
}

@each $weight, $value in $font-weights {
    .font-#{$weight} {
        font-weight: $value;
    }
}

@each $height, $value in $line-heights {
    .line-height-#{$height} {
        line-height: $value;
    }
}

.text {
    &-left { text-align: left; }
    &-right { text-align: right; }
    &-justify { text-align: justify; }
    &-center { text-align: center; }
    &-link { text-decoration: underline; }
}

.line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}

.text-decoration {
    &-line-through { text-decoration: line-through; }
    &-underline { text-decoration: underline; }
    &-none { text-decoration: none; }
}

.inline { display: inline; }
.block { display: block; }

.capitalize { text-transform: capitalize; }

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
