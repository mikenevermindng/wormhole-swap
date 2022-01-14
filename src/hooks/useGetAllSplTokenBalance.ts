import { Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSolanaWallet } from "../contexts/SolanaWalletContext";
import { setTargetParsedTokenAccount } from "../store/transferSlice";
import { SOLANA_HOST, SolScan } from "../utils/consts";

function useGetAllSplTokenBalance() {
    const dispatch = useDispatch();
    const solanaWallet = useSolanaWallet();
    const solPK = solanaWallet?.publicKey;
    
    useEffect(() => {
    // targetParsedTokenAccount is cleared on setTargetAsset, but we need to clear it on wallet changes too
    let cancelled = false;

    return () => {
        cancelled = true
    };
}, [
    dispatch,
    solanaWallet,
    solPK,
]);
}

export default useGetAllSplTokenBalance;