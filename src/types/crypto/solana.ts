import {
	IdentifierArray,
	IdentifierRecord,
	Wallet,
	WalletAccount,
} from "wallet-standard";
import { Feature } from "../features";
import { tryFeatureBase } from "../../utils/features";

const FeatureSolanaSignAndSendTransaction = new Feature<any>(
	"solana",
	"signAndSendTransaction"
);
const FeatureSolanaSignIn = new Feature<any>("solana", "signIn");

export class SolanaWallet implements Wallet {
	constructor(
		public version: "1.0.0",
		public name: string,
		public icon:
			| `data:image/svg+xml;base64,${string}`
			| `data:image/webp;base64,${string}`
			| `data:image/png;base64,${string}`
			| `data:image/gif;base64,${string}`,
		public chains: IdentifierArray,
		public features: IdentifierRecord<unknown>,
		public accounts: readonly WalletAccount[]
	) {}

	public async signAndSendTransaction(
		transaction: Uint8Array
	): Promise<string | null> {
		const feature = tryFeatureBase(this, FeatureSolanaSignAndSendTransaction);
		return feature ? await feature.signAndSendTransaction(transaction) : null;
	}

	/** Método para iniciar sesión */
	public async signIn(): Promise<void> {
		const feature = tryFeatureBase(this, FeatureSolanaSignIn);
		if (feature) await feature.signIn();
	}
}
