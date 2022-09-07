    const getWeather = async() => {
        const API_KEY="4e2694399f7aba49ededf47d8eb4fbe6"
        const lat =   document.getElementById("latitude").value || 0
        const lon =  document.getElementById("longitude").value || 0
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        const res = fetch(url)
            .then((response) => response.json())
            .then((data) => data.weather)
        return res
    }

    const renderWeather = async() =>{
        const body = document.getElementById("container")
        await getWeather().then((response) => {
            body.innerText = JSON.stringify(response)
        })
    }