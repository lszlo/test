<script>
import ImgFrame from "../components/ImgFrame.vue";
import Grab from "../scripts/grab.ts";
const grab = new Grab('english');

export default {
    data() {
        return {
            name: 'skins',
            emotes: [{
                id: 0,
                description: "",
                title: "",
                imagePath: "",
            }],
            assetsProps: {
                id: 'id',
                src: 'imagePath',
                description: 'description',
                title: 'title',
            },
        }
    },
    methods: {
        getSkins() {
            if (this.$store.state[this.name].caches.hasOwnProperty(this.$store.state.settings.language)) {
                this.Skins = this.$store.state[this.name].caches[this.$store.state.settings.language];
            } else {
                this.$Progress.start();
                grab.get('Skins', this.$store.state.settings.language).then(res => {
                    this.Skins = res.data;
                    let newlist = []
                    for (const item of this.Skins) {
                        if (item.hasOwnProperty('descriptions') && item.description !== undefined && item.description.length > 0) {
                            item.description = item.description[0].description;
                        } else {
                            item.description = "";
                        }
                        delete item.descriptions;
                        newlist.push(item);
                    }
                    newlist.sort((a, b) => { return a.id - b.id });
                    this.Skins = newlist.filter(item => {
                        return item[this.assetsProps.src] !== undefined;
                    })
                    this.$store.state[this.name].caches[this.$store.state.settings.language] = this.Skins;
                    this.$Progress.finish();
                    return;
                }, err => {
                    this.$Progress.fail();
                    console.log(err);
                    return;
                });
            }
        },
    },
    mounted() {
        this.Skins();
    },
    components: { ImgFrame }
}

</script>

<template>
    <img-frame
        :name="name"
        :assets-list="Skins"
        :assets-props="assetsProps"
        @on-lang-change="getSkins()"
    />
</template>