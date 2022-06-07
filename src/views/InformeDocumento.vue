<template>
  <div class="home">
      <h1>Enviar informe como Multipart</h1>
      <form @submit.prevent="sendFile">
        <input type="file" @change="uploadFile" ref="file" />
        <button type="submit"> Submit </button>
      </form>
  </div>
</template>

<script>
import instance from '../api/group';

export default {
    name: 'InformeDocumento',
    data() {
        return { 
            file: null
        }
    },
    methods: {
        uploadFile(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },
        sendFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            instance.post( '/passengers-upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>
.container{
    height: 45vh;
    width: 100%;
}
</style>