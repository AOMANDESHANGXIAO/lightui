<script setup>
defineOptions({
  name: 'lf-link'
})

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  },
  type: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    class="lf-link"
    :class="[`lf-link--${type}`, { 'is-disabled': disabled }, { 'is-no-underline': !underline }]"
  >
    <a :href="props.href" :target="target"><slot></slot></a>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/styles/common.scss';
$lf-link-font-size: 14px;
$lf-link-lighten-amount: 10%;
$lf-link-font-weight: 300;
.lf-link {
  display: inline-block;
  position: relative;
  a {
    color: $lf-text-color;
    text-decoration: none;
    font-size: $lf-link-font-size;
    font-weight: $lf-link-font-weight;
    &:hover {
      text-decoration: underline;
      // font-weight: 600;
      color: $theme-color;
    }
  }
}
.lf-link--primary {
  a {
    color: $theme-color;
    &:hover {
      color: lighten($theme-color, $lf-link-lighten-amount);
    }
  }
}
.lf-link--success {
  a {
    color: $success-color;
    &:hover {
      color: lighten($success-color, $lf-link-lighten-amount);
    }
  }
}
.lf-link--danger {
  a {
    color: $danger-color;
    &:hover {
      color: lighten($danger-color, $lf-link-lighten-amount);
    }
  }
}
.lf-link--warning {
  a {
    color: $warning-color;
    &:hover {
      color: lighten($warning-color, $lf-link-lighten-amount);
    }
  }
}
.lf-link--info {
  a {
    color: $info-color;
    &:hover {
      color: lighten($info-color, $lf-link-lighten-amount);
    }
  }
}
.lf-link.is-disabled {
  cursor: not-allowed;
  a,
  a:hover {
    color: rgba($lf-text-color, 0.8);
    text-decoration: none;
    pointer-events: none;
  }
}
.lf-link--primary.is-disabled {
  cursor: not-allowed;
  a,
  a:hover {
    color: rgba($theme-color, 0.8);
    text-decoration: none;
    pointer-events: none;
  }
}
.lf-link--success.is-disabled {
  cursor: not-allowed;
  a,
  a:hover {
    color: rgba($success-color, 0.8);
    text-decoration: none;
    pointer-events: none;
  }
}
.lf-link--warning.is-disabled {
  cursor: not-allowed;
  a,
  a:hover {
    color: rgba($warning-color, 0.8);
    text-decoration: none;
    pointer-events: none;
  }
}
.lf-link--danger.is-disabled {
  cursor: not-allowed;
  a,
  a:hover {
    color: rgba($danger-color, 0.8);
    text-decoration: none;
    pointer-events: none;
  }
}
.lf-link--info.is-disabled {
  cursor: not-allowed;
  a,
  a:hover {
    color: rgba($info-color, 0.8);
    text-decoration: none;
    pointer-events: none;
  }
}
.lf-link.is-no-underline {
  a,
  a:hover {
    text-decoration: none;
  }
}
</style>
