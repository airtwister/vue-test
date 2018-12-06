<template>
  <div class="condition">
    <h1>Шляпа очкана</h1>

    <div v-for="(user, index) in users" :key="index" class="user">
      <span class="user__name">{{ user.name }}</span>

      <span v-if="user.isOnline" class="user__status user__status--online"> онлайн </span>

      <span v-else-if="" class="user__status"> не в сети </span>

      <span class="user__hint">
        ({{ getStatusHint(user) }})
      </span>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    name:     'Harry Potter',
                    isOnline: true,
                    isMale:   true,
                },
                {
                    name:     'Hermione Granger',
                    isOnline: false,
                    isMale:   false,
                },
                {
                    name:     'Ron Weasley',
                    isOnline: true,
                    isMale:   true,
                },
            ]
        }
    },
    methods: {
        getStatusHint(user) {
            const verb = user.isMale ? 'был' : 'была';

            return user.isOnline ? '' : `${verb} недавно`;
        },
    }
};
</script>

<style lang="scss">
  .condition {
    .user {
      font-size: 20px;

      &__name {
        color: dodgerblue;
        font-weight: bold;
      }

      &__status {
        color: gray;

        &--online {
          color: green;
        }
      }

      &__hint {
        padding-top: 10px;
        color: #aaa;
        font-size: 14px;
      }
    }
  }
</style>
