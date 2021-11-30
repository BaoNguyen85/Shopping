<template>
    <div id="app" >
        <div class="notes-section">
            <div class="columns">
                <div class="column">
                    <strong>Ghi chú đã thêm</strong>
                    <div v-for="(note, index) in notes"
                        :key="index"
                        class="notes">
                        {{ note }}
                    </div>
                </div>
                <div class="column">
                    <strong>Thời Gian</strong>
                    <div v-for="(timestamp, index) in timestamps"
                        :key="index"
                        class="timestamps">
                        {{ timestamp }}
                    </div>
                </div>
            </div>
            <note-input></note-input>
        </div>
    </div>
</template>

<script>
import NoteInput from "./components/NoteInput.vue";

export default {
    name: "Feedback",
    components: {
        NoteInput
    },
    computed: {
        notes() {
            return this.$store.getters.getNotes;
        },
        timestamps() {
            return this.$store.getters.getTimestamps;
        },
    },
};
</script>

<style>
html,
body {
    height: 100%;
    background-color: rgba(12, 83, 100, 0.658);
}

#app {
    align-items: center;
    justify-content: center;
}

.notes-section {
    width: 500px;
    margin: 50px auto;
}


.notes,
.timestamps {
    padding: 5px 0px;
    color: rgb(164, 219, 226);
}
strong{
    font-size: 30px;
}
.column{
    padding: auto;
}
.notes,.timestamps{
    font-size: 20px;
}
</style>
