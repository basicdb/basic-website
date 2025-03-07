import React, { useEffect } from 'react';
import CalEmbed, { getCalApi } from "@calcom/embed-react";

export const useCalEmbed = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "speak-to-a-basic-founder" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);
};

const Cal = () => {
    return (
        <CalEmbed
            id="speak-to-a-basic-founder"
            namespace="speak-to-a-basic-founder"
            calLink="abhicvk/speak-to-a-basic-founder"
            style={{ width: "100%", height: "100%", overflow: "scroll", marginTop: "20vh", marginBottom: "10vh" }}
            config={{ layout: "month_view" }}
        />
    );
};

export default Cal; 