function fetchRequest() {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = 'loading...'
            const text = document.querySelector("textarea[name=text]").value;
            const offset = document.querySelector("input[name=offset]").value;

            const request = new Request(`/encode?text=${encodeURIComponent(text)}&offset=${encodeURIComponent(offset)}`);

            fetch(request)
                .then(response => response.json())
                .then(data => {
                    resultDiv.innerHTML = `<p><b>Результат: </b><i>${data.text}</i></p>`;
                })
                .catch(error => console.log(error));
        }