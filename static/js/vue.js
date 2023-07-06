Vue.component('contact-form', {
    template: `

        <form @submit.prevent="sendEmail">
            <table>
                <tbody>
                    <tr>
                        <tr>Nombre</tr>
                        <td><input type="text" v-model="name"></td>
                    </tr>
                    <tr>
                        <tr>Email</tr>
                        <td><input type="text" v-model="email"></td>
                    </tr>
                    <tr>
                        <tr>Mensaje</tr>
                        <td><textarea v-model="message"></textarea></td>
                        <tr><input type="submit" value="Enviar"></tr>
                    </tr>
                </tbody>
            </table>
        </form>
    `,
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {
            const templateParams = {
                user_name: this.name,
                user_email: this.email,
                message: this.message
            };
            window.emailjs.send('service_y9hmzlp', 'template_caay4cw', templateParams, 'ayp8A3zyEo4T1Chql')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.resetForm();
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
});