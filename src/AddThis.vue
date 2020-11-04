<template>
  <div
    v-bind="$attrs"
    class="addthis_inline_share_toolbox"
  />
</template>

<script>
  export default {
    name: "AddThis",
    props: {
      publicId: {
        type: String,
        required: true
      },
      cdn: {
        type: String,
        default: '//s7.addthis.com/js/300/addthis_widget.js'
      },
      async: {
        type: Boolean,
        required: false
      }
    },
    mounted() {
      if (process.browser) {
        if (document.getElementById('addthis-share') !== null) {
          return window.addthis && window.addthis.layers && window.addthis.layers.refresh();
        }

        const el = document.createElement('script');
        el.setAttribute('id', 'addthis-share');
        el.setAttribute('src', `${this.cdn}#pubid=${this.publicId}`);
        this.async && el.setAttribute('async', true);
        document.body.appendChild(el);
      }
    }
  }
</script>
