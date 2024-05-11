"use client";
import { serverConfig } from "../../../../apiConfig";
import { useEffect } from "react";

export default function RecordAndUploadESP32() {
    const sendReq = () => {
        serverConfig
            .post("device-connected")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => sendReq, []);

    return <h3>Hola..!</h3>;
}
