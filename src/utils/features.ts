import { WalletWithStandardFeatures } from "wallet-standard";
import { Feature } from "../types/features";

export function tryFeatureBase<F>(
	wallet: WalletWithStandardFeatures,
	feature: Feature<F>
): any | null {
	const identifier = feature.getIdentifier();
	const reference = feature.getReference();

	// Verifica si la feature existe en el wallet
	if (!wallet.features || !(identifier in wallet.features)) return null;

	const featureObject =
		wallet.features[identifier as keyof typeof wallet.features];

	// Verifica si la referencia existe dentro de la feature
	if (!(reference in featureObject)) return null;

	return featureObject[reference];
}
