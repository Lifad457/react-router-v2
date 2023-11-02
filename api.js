export async function getVans(vanId) {
    const response = await fetch("/api/vans" + (vanId ? `/${vanId}` : ""));
    console.log(response);
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans;
}

export async function getHostVans(vanId) {
    const response = await fetch("/api/host/vans" + (vanId ? `/${vanId}` : ""));
    console.log(response);
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans;
}

export async function login(creds) {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creds)
    })
    const data = await response.json();
    if (!response.ok) {
        throw {
            message: data.message, 
            statusText: response.statusText,
            status: response.status
        }
    }
    return data;
}