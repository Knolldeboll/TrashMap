const JsTestComponent = () => {

    let timeoutPromise = new Promise((resolve, reject) => {


        //Resolve after timeout
        //setTimeout(() => { resolve("resolved by timeout: sucess") }, 10000);


        // Resolve always and instantly

        if (false) {
            resolve(" timeout promise resolved successfully!");

        } else {
            reject(" timeout promise rejected with failure");
        }


    });


    // Reagiere auf resolve/reject mit zwei Funktionen!
    //timeoutPromise.then((value) => { console.log(value) }, (error) => { console.log(error) })

    // Dasselbe geht auch chained!
    timeoutPromise.then(value => console.log(value)).catch(error => console.log(error));


    let asyncPromise = async (): Promise<String> => {


        return "asyncpromise hi";
        // throw new Error("asyncpromise fail");



    }



    //asyncPromise().then((value) => { console.log(value) }, (error) => { console.log(error) })


    const run = async () => {



    }

    return (<>
        <div>promise test</div>
    </>)
};
export default JsTestComponent;