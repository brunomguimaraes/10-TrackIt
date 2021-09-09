import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <Loader 
            type="ThreeDots"
            color="#FFF"
            height={43}
            width={80}
        />
    );
}