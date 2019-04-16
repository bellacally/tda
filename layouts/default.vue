<template>
  <div>
    <app-header></app-header>
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
// import Modal from "@/components/Modal.vue";

export default {
  components: {
    "app-header": Header
    // "app-modal": Modal
  },
  mounted() {
    console.log(
      "%cFOUNDER SUMMIT 2019 🚀",
      "color:#fd1015; font-size:20px; font-family: arial; font-weight: bold;"
    );
  },
  created() {
    this.$nuxt.$on("buttonId", id => {
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: "58542912427",
        modal: true,
        modalTriggerElementId: id
      });
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("buttonId");
  }
};
</script>


<style lang="postcss">
#__layout {
  position: relative;
  overflow: hidden;
}

html {
  font-family: "Graphik Regular", "Helvetica", sans-serif;
  font-size: var(--font-base);
  letter-spacing: 0.5px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@media (--mobile), (--tablet) {
  #__layout {
    overflow: hidden;
  }
  .cookie-consent {
    width: 90%;
    grid-auto-flow: row;
    justify-items: center;
    padding: 10px 20px;
    text-align: center;
    height: auto;
    bottom: 60px;
    p {
      text-align: left;
      span {
        margin-right: 10px;
      }
    }
  }
}
@media (--mobile) and (orientation: landscape) {
  .cookie-consent {
    width: 95%;
    grid-auto-flow: column;
    bottom: 40px;
  }
}
@media (--tablet) {
  .cookie-consent {
    width: fit-content;
    padding: 10px 20px;
  }
}
@media (--tablet) and (orientation: landscape) {
  .cookie-consent {
    width: fit-content;
    grid-auto-flow: column;
    bottom: 50px;
    padding: 10px 20px;
  }
}
@media (max-width: 812px), (max-width: 1024px) and (min-width: 814px) {
  .cookie-consent {
    grid-auto-flow: column;
  }
}
</style>
