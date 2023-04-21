import * as $protobuf from "protobufjs";
/** Namespace metaservice. */
export namespace metaservice {

    /** Namespace otp. */
    namespace otp {

        /** Namespace registered. */
        namespace registered {

            /** Properties of an event. */
            interface Ievent {

                /** event mobile */
                mobile?: (string|null);
            }

            /** Represents an event. */
            class event implements Ievent {

                /**
                 * Constructs a new event.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: metaservice.otp.registered.Ievent);

                /** event mobile. */
                public mobile: string;

                /**
                 * Creates a new event instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns event instance
                 */
                public static create(properties?: metaservice.otp.registered.Ievent): metaservice.otp.registered.event;

                /**
                 * Encodes the specified event message. Does not implicitly {@link metaservice.otp.registered.event.verify|verify} messages.
                 * @param message event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: metaservice.otp.registered.Ievent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified event message, length delimited. Does not implicitly {@link metaservice.otp.registered.event.verify|verify} messages.
                 * @param message event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: metaservice.otp.registered.Ievent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an event message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): metaservice.otp.registered.event;

                /**
                 * Decodes an event message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): metaservice.otp.registered.event;

                /**
                 * Verifies an event message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an event message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns event
                 */
                public static fromObject(object: { [k: string]: any }): metaservice.otp.registered.event;

                /**
                 * Creates a plain object from an event message. Also converts values to other types if specified.
                 * @param message event
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: metaservice.otp.registered.event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this event to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace customers. */
export namespace customers {

    /** Namespace get. */
    namespace get {

        /** Properties of a request. */
        interface Irequest {

            /** request customerid */
            customerid?: (number|null);

            /** request mobile */
            mobile?: (string|null);

            /** request withtoken */
            withtoken?: (boolean|null);

            /** request fpaccountid */
            fpaccountid?: (number|null);
        }

        /** Represents a request. */
        class request implements Irequest {

            /**
             * Constructs a new request.
             * @param [properties] Properties to set
             */
            constructor(properties?: customers.get.Irequest);

            /** request customerid. */
            public customerid: number;

            /** request mobile. */
            public mobile: string;

            /** request withtoken. */
            public withtoken: boolean;

            /** request fpaccountid. */
            public fpaccountid: number;

            /**
             * Creates a new request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns request instance
             */
            public static create(properties?: customers.get.Irequest): customers.get.request;

            /**
             * Encodes the specified request message. Does not implicitly {@link customers.get.request.verify|verify} messages.
             * @param message request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: customers.get.Irequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified request message, length delimited. Does not implicitly {@link customers.get.request.verify|verify} messages.
             * @param message request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: customers.get.Irequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customers.get.request;

            /**
             * Decodes a request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customers.get.request;

            /**
             * Verifies a request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns request
             */
            public static fromObject(object: { [k: string]: any }): customers.get.request;

            /**
             * Creates a plain object from a request message. Also converts values to other types if specified.
             * @param message request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: customers.get.request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a response. */
        interface Iresponse {

            /** response customer */
            customer?: (customers.get.response.ICustomer|null);

            /** response msg */
            msg?: (string|null);
        }

        /** Represents a response. */
        class response implements Iresponse {

            /**
             * Constructs a new response.
             * @param [properties] Properties to set
             */
            constructor(properties?: customers.get.Iresponse);

            /** response customer. */
            public customer?: (customers.get.response.ICustomer|null);

            /** response msg. */
            public msg: string;

            /**
             * Creates a new response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns response instance
             */
            public static create(properties?: customers.get.Iresponse): customers.get.response;

            /**
             * Encodes the specified response message. Does not implicitly {@link customers.get.response.verify|verify} messages.
             * @param message response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: customers.get.Iresponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified response message, length delimited. Does not implicitly {@link customers.get.response.verify|verify} messages.
             * @param message response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: customers.get.Iresponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customers.get.response;

            /**
             * Decodes a response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customers.get.response;

            /**
             * Verifies a response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns response
             */
            public static fromObject(object: { [k: string]: any }): customers.get.response;

            /**
             * Creates a plain object from a response message. Also converts values to other types if specified.
             * @param message response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: customers.get.response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace response {

            /** Properties of a Customer. */
            interface ICustomer {

                /** Customer firstname */
                firstname?: (string|null);

                /** Customer lastname */
                lastname?: (string|null);

                /** Customer dob */
                dob?: (string|null);

                /** Customer email */
                email?: (string|null);

                /** Customer emailverified */
                emailverified?: (boolean|null);

                /** Customer pincode */
                pincode?: (string|null);

                /** Customer address1 */
                address1?: (string|null);

                /** Customer address2 */
                address2?: (string|null);

                /** Customer address3 */
                address3?: (string|null);

                /** Customer address4 */
                address4?: (string|null);

                /** Customer status */
                status?: (string|null);

                /** Customer customerid */
                customerid?: (number|null);

                /** Customer fpaccountid */
                fpaccountid?: (number|null);

                /** Customer pushid */
                pushid?: (string|null);

                /** Customer mobile */
                mobile?: (string|null);

                /** Customer id */
                id?: (number|null);

                /** Customer hubid */
                hubid?: (string|null);

                /** Customer platform */
                platform?: (string|null);

                /** Customer createdAt */
                createdAt?: (string|null);

                /** Customer token */
                token?: (string|null);

                /** Customer comment */
                comment?: (string|null);

                /** Customer fpversion */
                fpversion?: (string|null);
            }

            /** Represents a Customer. */
            class Customer implements ICustomer {

                /**
                 * Constructs a new Customer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: customers.get.response.ICustomer);

                /** Customer firstname. */
                public firstname: string;

                /** Customer lastname. */
                public lastname: string;

                /** Customer dob. */
                public dob: string;

                /** Customer email. */
                public email: string;

                /** Customer emailverified. */
                public emailverified: boolean;

                /** Customer pincode. */
                public pincode: string;

                /** Customer address1. */
                public address1: string;

                /** Customer address2. */
                public address2: string;

                /** Customer address3. */
                public address3: string;

                /** Customer address4. */
                public address4: string;

                /** Customer status. */
                public status: string;

                /** Customer customerid. */
                public customerid: number;

                /** Customer fpaccountid. */
                public fpaccountid: number;

                /** Customer pushid. */
                public pushid: string;

                /** Customer mobile. */
                public mobile: string;

                /** Customer id. */
                public id: number;

                /** Customer hubid. */
                public hubid: string;

                /** Customer platform. */
                public platform: string;

                /** Customer createdAt. */
                public createdAt: string;

                /** Customer token. */
                public token: string;

                /** Customer comment. */
                public comment: string;

                /** Customer fpversion. */
                public fpversion: string;

                /**
                 * Creates a new Customer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Customer instance
                 */
                public static create(properties?: customers.get.response.ICustomer): customers.get.response.Customer;

                /**
                 * Encodes the specified Customer message. Does not implicitly {@link customers.get.response.Customer.verify|verify} messages.
                 * @param message Customer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: customers.get.response.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Customer message, length delimited. Does not implicitly {@link customers.get.response.Customer.verify|verify} messages.
                 * @param message Customer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: customers.get.response.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Customer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Customer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customers.get.response.Customer;

                /**
                 * Decodes a Customer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Customer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customers.get.response.Customer;

                /**
                 * Verifies a Customer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Customer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Customer
                 */
                public static fromObject(object: { [k: string]: any }): customers.get.response.Customer;

                /**
                 * Creates a plain object from a Customer message. Also converts values to other types if specified.
                 * @param message Customer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: customers.get.response.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Customer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
