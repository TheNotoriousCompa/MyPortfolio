'use client';

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTexts() {
    return (
        <p className="mx-auto max-w-lg py-10 text-center text-3xl">
            <EncryptedText
                text="Built with these tools"
                encryptedClassName="text-emerald-500"
                revealedClassName="text-white"
                revealDelayMs={100}
            />
        </p>
    );
}
