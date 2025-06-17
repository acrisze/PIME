function assinarNewsLetter(email) {
    var url = 'https://rfzdciezrbgkhpcfacet.supabase.co/rest/v1/products';
    var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmemRjaWV6cmJna2hwY2ZhY2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMTU0OTksImV4cCI6MjA2NTY5MTQ5OX0.dZwWjmraUNYYw7eYjKPuf3_9qmtpPi5_I1rWh2ld9-c';

    fetch(url, {
        headers: {
            'apikey': apiKey,
            'Authorization': `Bearer ${apiKey}`,
        }
    })
        .then(response => {
            var data = response.json();
            console.log(data);
        })
        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));

}