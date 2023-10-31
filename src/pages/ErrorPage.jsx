export default function ErrorPage({ err }) {
    console.log(err)    
    return (
        <div>
            <h1>Page not found!</h1>

            {err && 
                <>
                    <p>{err.message}</p>
                    <p>{err.statusText}</p>
                    <p>{err.status}</p>
                </>
            }
        </div>
    )
}