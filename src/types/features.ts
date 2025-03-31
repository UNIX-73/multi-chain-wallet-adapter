import { IdentifierString } from "wallet-standard";

export class Feature<F> {
	constructor(private namespace: string, private reference: string) {}

	private identifier: IdentifierString = `${this.namespace}:${this.reference}`;

	public getNamespace(): string {
		return this.namespace;
	}
	public getReference(): string {
		return this.reference;
	}
	public getIdentifier(): IdentifierString {
		return this.identifier;
	}
}
