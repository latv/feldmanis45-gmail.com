
import React, { useState } from 'react';
import { Modal, message } from 'antd';
import Input from 'components/Input';
import APIClient from 'utils/apiClient';

const SearchForWish = ({ setSearchForWish, setIsSearchForWishModalOpen, visible }) => {
    const [takeWishSearch, setWishSearch] = useState("");
    const [inputError, setInputError] = useState(null);

    const takeAmount = async () => {
        try {
            let response = await APIClient.request(
                '/api/wallet/withdraw-amount',
                { search: takeWishSearch},
                'POST'
            );

            setSearchForWish(response);
            setIsSearchForWishModalOpen(false);

            message.success("Transactation successful!");
        } catch (err) {
            const errorResponse = err.response;

            if (errorResponse.status === 422) {
                const amountErrors = errorResponse.data.errors.amount;
                setInputError(amountErrors.join(", "));
            } else {
                message.error("Transaction failed!");
            }
        }
    }

    return (
        <Modal
            title="Search for wish"
            visible={visible}
            onOk={() => takeWishSearch()}
            onCancel={() => {
                setIsSearchForWishModalOpen(false);

            }}
            okText="Take money"
        >
            <Input

                value={takeWishSearch}


                
            />
        </Modal>
    )
}

export default SearchForWish;