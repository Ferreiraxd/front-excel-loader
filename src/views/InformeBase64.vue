<template>
  <div class="home">
      <h1>Enviar informe como Base64</h1>
      <form @submit.prevent="sendFile">
        <input type="file" @change="uploadFile" ref="file" />
        <button type="submit"> Submit </button>
      </form>
  </div>
</template>

<script>
import instance from '../api/group';

export default {
    name: 'InformeBase64',
    data() {
        return { 
            file: null,
            base64File: null
        }
    },
    methods: {
        uploadFile(event) {
            this.file = event.target.files[0];
            console.log(this.file);
            this.readData();
        },
        async sendFile(){
            const data = { fileName: this.file.name, fileContent: this.base64File.split(',')[1] };
            console.log(data);
            
            instance.post( '/passengers-upload-base64',
                data,
                ).then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async readData () {
            let results = {
                fileContent: '',
                fileName: ''
            } 
            var reader = new FileReader()
            reader.readAsDataURL(this.file);
            reader.onload = () => { this.base64File = reader.result; }
        }
    }
}
</script>

<style>

</style>