/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents an event type.
 */
export class EventType extends SpeakeasyBase {
    /**
     * List of API versions that this event type supports.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "available_versions" })
    availableVersions?: number[];

    /**
     * Short description of this event type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Group for this event type. Typically the entity that this event relates to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    group?: string;

    /**
     * Type of event sent by Paddle, in the format `entity.event_type`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}