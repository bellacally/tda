<template>
  <header>
    <div class="__logo">
      <img src="../assets/images/dlg-lewagon-logo.png" alt="DLG x Le Wagon logo">
    </div>
    <div class="__navigation">
      <a class="__navigation--underline" href="#intervenants" v-smooth-scroll="{ duration: 1000, offset: -50 }">Instructors</a>
      <a class="__navigation--underline" href="mailto:claire.chen@lewagon.org">Contact</a>
      <a id="number1-58542912427" class="btn btn-white" @click="getId($event)">Register</a>
    </div>
    <div class="__mobile">
      <div @click="menuClicked = !menuClicked" class="__mobile--btn">
        <span v-if="!menuClicked">Menu</span>
        <img
          v-else
          @click.stop="menuClicked = false"
          src="../assets/icons/cross.svg"
          alt="cross icon"
          class="cross"
        />
      </div>
      <nav v-if="menuClicked" class="__mobile--navigation">
        <ul>
          <li><a href="#intervenants" v-smooth-scroll="{ duration: 1000, offset: -50 }">Speakers</a></li>
          <li><a href="mailto:lyon@lewagon.org">Contact</a></li>
          <li>
            <a id="number2-58542912427" class="btn btn-red" @click="getId($event)">Application</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuClicked: false
    };
  },
  methods: {
    getId: function(id) {
      this.$nuxt.$emit("buttonId", id.target.id);
    }
  }
};
</script>


<style lang="postcss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  z-index: 10;
  padding: 0 var(--spacing-base);
  .__logo {
    display: flex;
    align-items: center;
    position: relative;
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      right: -25px;
      height: 43px;
      border: 0.5px solid rgba(0, 0, 0, 0.2);
    }
  }
  .__adress {
    flex: 1;
    margin-left: 40px;
    &:before {
      content: "";
      display: inline-block;
      height: 15px;
      width: 8px;
      background: url(../assets/icons/pin.svg) center no-repeat;
      margin: 0 15px;
    }
  }
  .__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    color: white;
    &--underline {
      position: relative;
      &:after {
        border-bottom: 1.5px solid white;
        content: "";
        display: block;
        position: absolute;
        margin: 0.25em auto 0;
        transition: width 250ms ease-in-out 0s;
        width: 0;
      }
      &:hover {
        &:after {
          width: 100%;
          transition: width 100ms ease-in-out 0s;
        }
      }
    }
  }
  .__mobile {
    display: none;
  }
}

@media (--mobile) {
  header {
    padding: 0 20px;
    margin-top: 20px;
    .__logo {
      &:after {
        display: none;
      }
      img {
        height: 40px;
      }
    }
    .__adress {
      display: none;
    }
    .__navigation {
      display: none;
    }
    .__mobile {
      display: block;
      &--btn {
        .cross {
          display: block;
          width: 30px;
        }
      }
      &--navigation {
        display: block;
        position: absolute;
        background-color: white;
        top: 75px;
        left: 0;
        width: 100%;
        padding: 20px 0;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        z-index: 10;
        ul {
          display: grid;
          gap: 50px;
          padding: 20px 30px;
          list-style: none;
          li {
            &:last-child {
              color: white;
              text-align: center;
              a {
                width: 100%;
                padding: 20px 0;
              }
            }
          }
        }
      }
    }
  }
}

@media (--tablet) {
  header {
    padding: 0 40px;
    .__logo {
      &:after {
        display: none;
      }
    }
    .__adress {
      display: none;
    }
  }
}
</style>
