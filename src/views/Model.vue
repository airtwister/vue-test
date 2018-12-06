<template>
  <div class="model">
    <h1>MVVM</h1>

    <form class="form">

      <div class="form__item">
        <div class="form__label">Имя</div>
        <input type="text" class="form__input" v-model="firstname"/>
      </div>

      <div class="form__item">
        <div class="form__label">Фамилия</div>
        <input type="text" class="form__input" v-model="lastname"/>
      </div>

      <a class="change" @click="firstname = 'Max'">
        Сделать Джона Максом
      </a> <br/> <br/>

      <button class="user__hint" type="button" @click="send">
        Отправить куда-нибудь
      </button>

    </form>

    <div class="success" v-if="sent">
      Молодец, {{ name }}!
    </div>
  </div>
</template>

<script>
export default {
    props: {
        some: Boolean,
    },
    data() {
        return {
            firstname: 'John',
            lastname:  'Doe',
            sent:      false,
        }
    },
    computed: {
        name() {
            return `${this.firstname} ${this.lastname}`;
        },
    },
    mounted() {
        console.log(this.some);
    },
    methods: {
        send() {
          this.sent = true;
        },
    },
};
</script>

<style lang="scss">
  .model {
    .form {
      margin: 0 auto;
      width: 600px;
      font-size: 20px;

      &__item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }

      &__label, &__input {
        width: 50%;
      }

      &__label {
        text-align: left;
        padding-right: 20px;
      }

      &__input {
        padding: 0 10px;
        height: 36px;
        font-size: 16px;
        line-height: 34px;
        border-radius: 4px;
        border: 1px solid lightslategray;
      }
    }

    a {
      cursor: pointer;
      font-size: 15px;

      &:hover {
        color: red;
      }
    }

    button {
      cursor: pointer;
      background: dodgerblue;
      color: white;
      height: 48px;
      border: none;
      border-radius: 3px;
      font-size: 16px;
      padding: 0 10px;
    }

    .success {
      font-size: 20px;
      padding-top: 20px;
      color: green;
    }
  }
</style>
