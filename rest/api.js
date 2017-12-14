export const getUserSuggestions = (displayName = '') => {
    return fetch(`https://api.github.com/users?since=135${displayName.slice(1)}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((res) => {
            console.log(res);
            if (!res.ok) {
                throw new Error("Went wrong");
            }
            return res.json();
        })
};

