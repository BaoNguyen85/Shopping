<template>
    <input
        placeholder="Thêm ghi chú..."
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small"
        type="text"
    />
</template>

<script>
export default {
    name: "NoteInput",
    data() {
        return {
            input: "",
        };
    },
    methods: {
        monitorEnterKey() {
            this.$store.dispatch("addNote", this.input);
            this.$store.dispatch("addTimestamp", new Date().toLocaleString());
            this.input = "";
        },
    },
};
</script>
<style>

</style>
