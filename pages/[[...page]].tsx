import { GetStaticProps, GetStaticPaths } from "next"

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(`go time`)
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('yay')
        }, 5000)
    })

    const result = await p

    return {
        props: {
            result,
        }
    }
}

export const getStaticPaths: GetStaticPaths = (cntext) => {
    return {
        fallback: `blocking`,
        paths: [
            { params: { page: [`foo`] } },
            { params: { page: [`bar`] } },
        ]
    }
}

export default ({ result }: any) => {
    return <h2>{result}</h2>
}