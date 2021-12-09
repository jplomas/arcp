<template name="choose-year-old">
  <div class="container">
    <div class="row text-center">
      <h4>Choose year of training</h4>
    </div>
    <div class="text-center">
      <button
        id="CT1"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('CT1'), 'btn-outline-secondary': !isActive('CT1') }"
        @click="setYear(1)"
      >
        CT1
      </button>

      <button
        id="CT2"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('CT2'), 'btn-outline-secondary': !isActive('CT2') }"
        @click="setYear(2)"
      >
        CT2
      </button>

      <button
        id="CT3"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('CT3'), 'btn-outline-secondary': !isActive('CT3') }"
        @click="setYear(50)"
      >
        CT3
      </button>

      <button
        id="ST3"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('ST3'), 'btn-outline-secondary': !isActive('ST3') }"
        @click="setYear(3)"
      >
        ST3
      </button>

      <button
        id="ST4"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('ST4'), 'btn-outline-secondary': !isActive('ST4') }"
        @click="setYear(4)"
      >
        ST4
      </button>

      <button
        id="ST5"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('ST5'), 'btn-outline-secondary': !isActive('ST5') }"
        @click="setYear(5)"
      >
        ST5
      </button>

      <button
        id="ST6"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('ST6'), 'btn-outline-secondary': !isActive('ST6') }"
        @click="setYear(6)"
      >
        ST6
      </button>

      <button
        id="ST7"
        class="m-1 btn"
        :class="{ 'btn-secondary': isActive('ST7'), 'btn-outline-secondary': !isActive('ST7') }"
        @click="setYear(7)"
      >
        ST7
      </button>
    </div>
    <div class="row justify-content-center">
      <button
        id="ALL"
        class="btn m-1"
        :class="{ 'btn-warning': isActive('ALL'), 'btn-outline-warning': !isActive('ALL') }"
        @click="setYear(0)"
      >
        Show All
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'ChooseYearOld',
      items: -1,
    };
  },
  methods: {
    setYear(option) {
      if (this.$store.state.items === 0 && option === 0) {
        this.$store.state.items = -1;
      } else {
        this.$store.state.items = option;
      }
    },
    isActive(year) {
      if (this.$store.state.items === 0) {
        return true;
      }
      if (year === 'CT1') {
        if (this.$store.state.items === 1) {
          return true;
        }
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'CT2') {
        if (this.$store.state.items === 2) {
          return true;
        }
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'CT3') {
        if (this.$store.state.items === 50) {
          return true;
        }
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'ST3') {
        if (this.$store.state.items === 3) {
          return true;
        }
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'ST4') {
        if (this.$store.state.items === 4) {
          return true;
        }
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'ST5') {
        if (this.$store.state.items === 5) {
          return true;
        }
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'ST6') {
        if (this.$store.state.items === 6) {
          return true;
        }
        if (this.$store.state.items === 300) {
          return true;
        }
        return false;
      }
      if (year === 'ST7') {
        if (this.$store.state.items === 7) {
          return true;
        }
        if (this.$store.state.items === 300) {
          return true;
        }
        return false;
      }
      if (year === 'Stage1') {
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'Stage2') {
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'Stage3') {
        if (this.$store.state.items === 300) {
          return true;
        }
        return false;
      }
      return false;
    },
  },
};
</script>