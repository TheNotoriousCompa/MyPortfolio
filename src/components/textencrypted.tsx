'use client';

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

type EncryptedTextsProps = {
    text: string;
};

export function EncryptedTexts({ text }: EncryptedTextsProps) {
    return (
        <h3 className="mx-auto max-w-2xl py-6 text-center text-2xl font-medium tracking-tight md:py-8 md:text-3xl">
            <EncryptedText
                text={text}
                encryptedClassName="text-emerald-500"
                revealedClassName="text-white"
                revealDelayMs={180}
                flipDelayMs={90}
            />
        </h3>
    );
}
