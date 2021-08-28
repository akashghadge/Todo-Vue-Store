export const actions = {
    apiFetch(context) {
        // quote fetch api
        const url = "https://type.fit/api/quotes";
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                context.commit('setQuotes', data);
            })
            .catch((err) => {
                alert(err);
            });
    }
}