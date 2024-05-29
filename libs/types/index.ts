import type { ClientSideWorkflowStep } from "./ClientSideWorkflowStep";
import type { ManualInterventionWorkflowStep } from "./ManualInterventionWorkflowStep";
import type { ServerSideWorkflowStep } from "./ServerSideWorkflowStep";
import type { WebhookWorkflowStep } from "./WebhookWorkflowStep";

import type { WorkflowStepResolver } from "./Resolver";
import type { WorkflowCurrentState } from "./WorkflowCurrentState";

export type WorkflowStepParticipants =
	| "customer"
	| "server"
	| "manual-intervention"
	| "webhook";

export type WorkflowStep = {
	id: string;
	heading: string;
	description?: string;
} & (
	| ClientSideWorkflowStep
	| ServerSideWorkflowStep
	| ManualInterventionWorkflowStep
	| WebhookWorkflowStep
);

export type WorkflowDefinitionSchema = {
	id: string;
	steps: WorkflowStep[];
};

export type WorkflowInitOptions = {
	participant: WorkflowStepParticipants;
	resolvers?: {
		[stepId: string]: WorkflowStepResolver;
	};
};

export { WorkflowCurrentState, WorkflowStepResolver };