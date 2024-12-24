import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { showAlerts } from "../utils";

interface AlertHandlerProps {
    response?: any | null;
    hasError: AxiosError | null;
}

export const MessageHandler: React.FC<AlertHandlerProps> = ({
    response,
    hasError,
}) => {
    const [errors, setErrors] = useState<any>(null);
    const [success, setSuccess] = useState<any>(null);

    useEffect(() => {
        if (hasError) {
            console.log(hasError);
            setErrors(hasError.response?.data ?? hasError);
            setSuccess(null);
        } else if (response) {
            setSuccess(response);
            setErrors(null);
        }
    }, [hasError, response]);

    useEffect(() => {
        setSuccess(null);
        setErrors(null);

        if (errors) {

            if (errors.message) {
                showAlerts({ message: errors.message, type: "error" });
            }

            if (errors.errors && Array.isArray(errors.errors)) {
                errors.errors.forEach((error: any) => {
                    showAlerts({ message: error.message, type: "error" });
                });
            }

        } else if (success) {

            showAlerts({ message: success.message ?? "Ok", type: "success" });
        }


    }, [errors, success]);

    return null;
};
