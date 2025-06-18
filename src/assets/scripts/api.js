var assinarForm = document.getElementById('subscribeForm');

assinarForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    var email = document.getElementById('inscrever').value;

    await assinarNewsLetter(email)
})

async function assinarNewsLetter(email) {
    var url = 'https://rfzdciezrbgkhpcfacet.supabase.co/rest/v1/news_letter';
    var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmemRjaWV6cmJna2hwY2ZhY2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMTU0OTksImV4cCI6MjA2NTY5MTQ5OX0.dZwWjmraUNYYw7eYjKPuf3_9qmtpPi5_I1rWh2ld9-c';

    try {
        var requisicao = await fetch(url, {
            method: 'POST',
            headers: {
                'apikey': apiKey,
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({ email })
        });

        var data = await requisicao.json();
        var resposta;

        if (requisicao.ok) {
            resposta = 'E-mail cadastrado com sucesso!';

            await sendEmail(email);

        } else {
            if (requisicao.status === 409) {
                resposta = 'E-mail já cadastrado.';
            } else {
                resposta = 'Erro desconhecido ao cadastrar: ' + JSON.stringify(data);
            }
        }

        alert(resposta);
    } catch (error) {
        console.log('Erro ->', error.message);
    }

    document.getElementById('inscrever').value = '';
}

async function sendEmail(email) {
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'service_dgz7htb',
            template_id: 'template_gqfzoub',
            user_id: 'tanzZyXpYNzCgDv73', // ou public key
            template_params: {
                email
            }
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('Email enviado com sucesso!');
            } else {
                return response.text().then(text => { throw new Error(text); });
            }
        })
        .catch(error => {
            alert('Erro ao enviar: ' + error.message);
        });

}