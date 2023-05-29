const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'enviando...';

        const serviceID = 'service_8z6e0jb';
        const templateID = 'template_xd9w2vk';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Consulta';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Enviar Consulta';
                alert(JSON.stringify(err));
            });
    });