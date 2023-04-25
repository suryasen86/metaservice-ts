/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.metaservicets = (function() {

    /**
     * Namespace metaservicets.
     * @exports metaservicets
     * @namespace
     */
    var metaservicets = {};

    metaservicets.otp = (function() {

        /**
         * Namespace otp.
         * @memberof metaservicets
         * @namespace
         */
        var otp = {};

        otp.registered = (function() {

            /**
             * Namespace registered.
             * @memberof metaservicets.otp
             * @namespace
             */
            var registered = {};

            registered.event = (function() {

                /**
                 * Properties of an event.
                 * @memberof metaservicets.otp.registered
                 * @interface Ievent
                 * @property {string|null} [mobile] event mobile
                 */

                /**
                 * Constructs a new event.
                 * @memberof metaservicets.otp.registered
                 * @classdesc Represents an event.
                 * @implements Ievent
                 * @constructor
                 * @param {metaservicets.otp.registered.Ievent=} [properties] Properties to set
                 */
                function event(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * event mobile.
                 * @member {string} mobile
                 * @memberof metaservicets.otp.registered.event
                 * @instance
                 */
                event.prototype.mobile = "";

                /**
                 * Creates a new event instance using the specified properties.
                 * @function create
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {metaservicets.otp.registered.Ievent=} [properties] Properties to set
                 * @returns {metaservicets.otp.registered.event} event instance
                 */
                event.create = function create(properties) {
                    return new event(properties);
                };

                /**
                 * Encodes the specified event message. Does not implicitly {@link metaservicets.otp.registered.event.verify|verify} messages.
                 * @function encode
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {metaservicets.otp.registered.Ievent} message event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                event.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.mobile != null && Object.hasOwnProperty.call(message, "mobile"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                    return writer;
                };

                /**
                 * Encodes the specified event message, length delimited. Does not implicitly {@link metaservicets.otp.registered.event.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {metaservicets.otp.registered.Ievent} message event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                event.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an event message from the specified reader or buffer.
                 * @function decode
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {metaservicets.otp.registered.event} event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                event.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.metaservicets.otp.registered.event();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.mobile = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an event message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {metaservicets.otp.registered.event} event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                event.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an event message.
                 * @function verify
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                event.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.mobile != null && message.hasOwnProperty("mobile"))
                        if (!$util.isString(message.mobile))
                            return "mobile: string expected";
                    return null;
                };

                /**
                 * Creates an event message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {metaservicets.otp.registered.event} event
                 */
                event.fromObject = function fromObject(object) {
                    if (object instanceof $root.metaservicets.otp.registered.event)
                        return object;
                    var message = new $root.metaservicets.otp.registered.event();
                    if (object.mobile != null)
                        message.mobile = String(object.mobile);
                    return message;
                };

                /**
                 * Creates a plain object from an event message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof metaservicets.otp.registered.event
                 * @static
                 * @param {metaservicets.otp.registered.event} message event
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                event.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.mobile = "";
                    if (message.mobile != null && message.hasOwnProperty("mobile"))
                        object.mobile = message.mobile;
                    return object;
                };

                /**
                 * Converts this event to JSON.
                 * @function toJSON
                 * @memberof metaservicets.otp.registered.event
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                event.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return event;
            })();

            return registered;
        })();

        return otp;
    })();

    return metaservicets;
})();

$root.customers = (function() {

    /**
     * Namespace customers.
     * @exports customers
     * @namespace
     */
    var customers = {};

    customers.get = (function() {

        /**
         * Namespace get.
         * @memberof customers
         * @namespace
         */
        var get = {};

        get.request = (function() {

            /**
             * Properties of a request.
             * @memberof customers.get
             * @interface Irequest
             * @property {number|null} [customerid] request customerid
             * @property {string|null} [mobile] request mobile
             * @property {boolean|null} [withtoken] request withtoken
             * @property {number|null} [fpaccountid] request fpaccountid
             */

            /**
             * Constructs a new request.
             * @memberof customers.get
             * @classdesc Represents a request.
             * @implements Irequest
             * @constructor
             * @param {customers.get.Irequest=} [properties] Properties to set
             */
            function request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * request customerid.
             * @member {number} customerid
             * @memberof customers.get.request
             * @instance
             */
            request.prototype.customerid = 0;

            /**
             * request mobile.
             * @member {string} mobile
             * @memberof customers.get.request
             * @instance
             */
            request.prototype.mobile = "";

            /**
             * request withtoken.
             * @member {boolean} withtoken
             * @memberof customers.get.request
             * @instance
             */
            request.prototype.withtoken = false;

            /**
             * request fpaccountid.
             * @member {number} fpaccountid
             * @memberof customers.get.request
             * @instance
             */
            request.prototype.fpaccountid = 0;

            /**
             * Creates a new request instance using the specified properties.
             * @function create
             * @memberof customers.get.request
             * @static
             * @param {customers.get.Irequest=} [properties] Properties to set
             * @returns {customers.get.request} request instance
             */
            request.create = function create(properties) {
                return new request(properties);
            };

            /**
             * Encodes the specified request message. Does not implicitly {@link customers.get.request.verify|verify} messages.
             * @function encode
             * @memberof customers.get.request
             * @static
             * @param {customers.get.Irequest} message request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.customerid != null && Object.hasOwnProperty.call(message, "customerid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.customerid);
                if (message.mobile != null && Object.hasOwnProperty.call(message, "mobile"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.mobile);
                if (message.withtoken != null && Object.hasOwnProperty.call(message, "withtoken"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.withtoken);
                if (message.fpaccountid != null && Object.hasOwnProperty.call(message, "fpaccountid"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fpaccountid);
                return writer;
            };

            /**
             * Encodes the specified request message, length delimited. Does not implicitly {@link customers.get.request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof customers.get.request
             * @static
             * @param {customers.get.Irequest} message request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a request message from the specified reader or buffer.
             * @function decode
             * @memberof customers.get.request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {customers.get.request} request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.customers.get.request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.customerid = reader.int32();
                        break;
                    case 2:
                        message.mobile = reader.string();
                        break;
                    case 3:
                        message.withtoken = reader.bool();
                        break;
                    case 4:
                        message.fpaccountid = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof customers.get.request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {customers.get.request} request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a request message.
             * @function verify
             * @memberof customers.get.request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            request.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.customerid != null && message.hasOwnProperty("customerid"))
                    if (!$util.isInteger(message.customerid))
                        return "customerid: integer expected";
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    if (!$util.isString(message.mobile))
                        return "mobile: string expected";
                if (message.withtoken != null && message.hasOwnProperty("withtoken"))
                    if (typeof message.withtoken !== "boolean")
                        return "withtoken: boolean expected";
                if (message.fpaccountid != null && message.hasOwnProperty("fpaccountid"))
                    if (!$util.isInteger(message.fpaccountid))
                        return "fpaccountid: integer expected";
                return null;
            };

            /**
             * Creates a request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof customers.get.request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {customers.get.request} request
             */
            request.fromObject = function fromObject(object) {
                if (object instanceof $root.customers.get.request)
                    return object;
                var message = new $root.customers.get.request();
                if (object.customerid != null)
                    message.customerid = object.customerid | 0;
                if (object.mobile != null)
                    message.mobile = String(object.mobile);
                if (object.withtoken != null)
                    message.withtoken = Boolean(object.withtoken);
                if (object.fpaccountid != null)
                    message.fpaccountid = object.fpaccountid | 0;
                return message;
            };

            /**
             * Creates a plain object from a request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof customers.get.request
             * @static
             * @param {customers.get.request} message request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.customerid = 0;
                    object.mobile = "";
                    object.withtoken = false;
                    object.fpaccountid = 0;
                }
                if (message.customerid != null && message.hasOwnProperty("customerid"))
                    object.customerid = message.customerid;
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    object.mobile = message.mobile;
                if (message.withtoken != null && message.hasOwnProperty("withtoken"))
                    object.withtoken = message.withtoken;
                if (message.fpaccountid != null && message.hasOwnProperty("fpaccountid"))
                    object.fpaccountid = message.fpaccountid;
                return object;
            };

            /**
             * Converts this request to JSON.
             * @function toJSON
             * @memberof customers.get.request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return request;
        })();

        get.response = (function() {

            /**
             * Properties of a response.
             * @memberof customers.get
             * @interface Iresponse
             * @property {customers.get.response.ICustomer|null} [customer] response customer
             * @property {string|null} [msg] response msg
             */

            /**
             * Constructs a new response.
             * @memberof customers.get
             * @classdesc Represents a response.
             * @implements Iresponse
             * @constructor
             * @param {customers.get.Iresponse=} [properties] Properties to set
             */
            function response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * response customer.
             * @member {customers.get.response.ICustomer|null|undefined} customer
             * @memberof customers.get.response
             * @instance
             */
            response.prototype.customer = null;

            /**
             * response msg.
             * @member {string} msg
             * @memberof customers.get.response
             * @instance
             */
            response.prototype.msg = "";

            /**
             * Creates a new response instance using the specified properties.
             * @function create
             * @memberof customers.get.response
             * @static
             * @param {customers.get.Iresponse=} [properties] Properties to set
             * @returns {customers.get.response} response instance
             */
            response.create = function create(properties) {
                return new response(properties);
            };

            /**
             * Encodes the specified response message. Does not implicitly {@link customers.get.response.verify|verify} messages.
             * @function encode
             * @memberof customers.get.response
             * @static
             * @param {customers.get.Iresponse} message response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.customer != null && Object.hasOwnProperty.call(message, "customer"))
                    $root.customers.get.response.Customer.encode(message.customer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified response message, length delimited. Does not implicitly {@link customers.get.response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof customers.get.response
             * @static
             * @param {customers.get.Iresponse} message response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a response message from the specified reader or buffer.
             * @function decode
             * @memberof customers.get.response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {customers.get.response} response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.customers.get.response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.customer = $root.customers.get.response.Customer.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof customers.get.response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {customers.get.response} response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a response message.
             * @function verify
             * @memberof customers.get.response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.customer != null && message.hasOwnProperty("customer")) {
                    var error = $root.customers.get.response.Customer.verify(message.customer);
                    if (error)
                        return "customer." + error;
                }
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            /**
             * Creates a response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof customers.get.response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {customers.get.response} response
             */
            response.fromObject = function fromObject(object) {
                if (object instanceof $root.customers.get.response)
                    return object;
                var message = new $root.customers.get.response();
                if (object.customer != null) {
                    if (typeof object.customer !== "object")
                        throw TypeError(".customers.get.response.customer: object expected");
                    message.customer = $root.customers.get.response.Customer.fromObject(object.customer);
                }
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };

            /**
             * Creates a plain object from a response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof customers.get.response
             * @static
             * @param {customers.get.response} message response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.customer = null;
                    object.msg = "";
                }
                if (message.customer != null && message.hasOwnProperty("customer"))
                    object.customer = $root.customers.get.response.Customer.toObject(message.customer, options);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };

            /**
             * Converts this response to JSON.
             * @function toJSON
             * @memberof customers.get.response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            response.Customer = (function() {

                /**
                 * Properties of a Customer.
                 * @memberof customers.get.response
                 * @interface ICustomer
                 * @property {string|null} [firstname] Customer firstname
                 * @property {string|null} [lastname] Customer lastname
                 * @property {string|null} [dob] Customer dob
                 * @property {string|null} [email] Customer email
                 * @property {boolean|null} [emailverified] Customer emailverified
                 * @property {string|null} [pincode] Customer pincode
                 * @property {string|null} [address1] Customer address1
                 * @property {string|null} [address2] Customer address2
                 * @property {string|null} [address3] Customer address3
                 * @property {string|null} [address4] Customer address4
                 * @property {string|null} [status] Customer status
                 * @property {number|null} [customerid] Customer customerid
                 * @property {number|null} [fpaccountid] Customer fpaccountid
                 * @property {string|null} [pushid] Customer pushid
                 * @property {string|null} [mobile] Customer mobile
                 * @property {number|null} [id] Customer id
                 * @property {string|null} [hubid] Customer hubid
                 * @property {string|null} [platform] Customer platform
                 * @property {string|null} [createdAt] Customer createdAt
                 * @property {string|null} [token] Customer token
                 * @property {string|null} [comment] Customer comment
                 * @property {string|null} [fpversion] Customer fpversion
                 */

                /**
                 * Constructs a new Customer.
                 * @memberof customers.get.response
                 * @classdesc Represents a Customer.
                 * @implements ICustomer
                 * @constructor
                 * @param {customers.get.response.ICustomer=} [properties] Properties to set
                 */
                function Customer(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Customer firstname.
                 * @member {string} firstname
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.firstname = "";

                /**
                 * Customer lastname.
                 * @member {string} lastname
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.lastname = "";

                /**
                 * Customer dob.
                 * @member {string} dob
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.dob = "";

                /**
                 * Customer email.
                 * @member {string} email
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.email = "";

                /**
                 * Customer emailverified.
                 * @member {boolean} emailverified
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.emailverified = false;

                /**
                 * Customer pincode.
                 * @member {string} pincode
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.pincode = "";

                /**
                 * Customer address1.
                 * @member {string} address1
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.address1 = "";

                /**
                 * Customer address2.
                 * @member {string} address2
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.address2 = "";

                /**
                 * Customer address3.
                 * @member {string} address3
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.address3 = "";

                /**
                 * Customer address4.
                 * @member {string} address4
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.address4 = "";

                /**
                 * Customer status.
                 * @member {string} status
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.status = "";

                /**
                 * Customer customerid.
                 * @member {number} customerid
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.customerid = 0;

                /**
                 * Customer fpaccountid.
                 * @member {number} fpaccountid
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.fpaccountid = 0;

                /**
                 * Customer pushid.
                 * @member {string} pushid
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.pushid = "";

                /**
                 * Customer mobile.
                 * @member {string} mobile
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.mobile = "";

                /**
                 * Customer id.
                 * @member {number} id
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.id = 0;

                /**
                 * Customer hubid.
                 * @member {string} hubid
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.hubid = "";

                /**
                 * Customer platform.
                 * @member {string} platform
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.platform = "";

                /**
                 * Customer createdAt.
                 * @member {string} createdAt
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.createdAt = "";

                /**
                 * Customer token.
                 * @member {string} token
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.token = "";

                /**
                 * Customer comment.
                 * @member {string} comment
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.comment = "";

                /**
                 * Customer fpversion.
                 * @member {string} fpversion
                 * @memberof customers.get.response.Customer
                 * @instance
                 */
                Customer.prototype.fpversion = "";

                /**
                 * Creates a new Customer instance using the specified properties.
                 * @function create
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {customers.get.response.ICustomer=} [properties] Properties to set
                 * @returns {customers.get.response.Customer} Customer instance
                 */
                Customer.create = function create(properties) {
                    return new Customer(properties);
                };

                /**
                 * Encodes the specified Customer message. Does not implicitly {@link customers.get.response.Customer.verify|verify} messages.
                 * @function encode
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {customers.get.response.ICustomer} message Customer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Customer.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.firstname != null && Object.hasOwnProperty.call(message, "firstname"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstname);
                    if (message.lastname != null && Object.hasOwnProperty.call(message, "lastname"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastname);
                    if (message.dob != null && Object.hasOwnProperty.call(message, "dob"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dob);
                    if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
                    if (message.emailverified != null && Object.hasOwnProperty.call(message, "emailverified"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.emailverified);
                    if (message.pincode != null && Object.hasOwnProperty.call(message, "pincode"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.pincode);
                    if (message.address1 != null && Object.hasOwnProperty.call(message, "address1"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.address1);
                    if (message.address2 != null && Object.hasOwnProperty.call(message, "address2"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.address2);
                    if (message.address3 != null && Object.hasOwnProperty.call(message, "address3"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.address3);
                    if (message.address4 != null && Object.hasOwnProperty.call(message, "address4"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.address4);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.status);
                    if (message.customerid != null && Object.hasOwnProperty.call(message, "customerid"))
                        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.customerid);
                    if (message.fpaccountid != null && Object.hasOwnProperty.call(message, "fpaccountid"))
                        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.fpaccountid);
                    if (message.pushid != null && Object.hasOwnProperty.call(message, "pushid"))
                        writer.uint32(/* id 14, wireType 2 =*/114).string(message.pushid);
                    if (message.mobile != null && Object.hasOwnProperty.call(message, "mobile"))
                        writer.uint32(/* id 15, wireType 2 =*/122).string(message.mobile);
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 16, wireType 0 =*/128).int32(message.id);
                    if (message.hubid != null && Object.hasOwnProperty.call(message, "hubid"))
                        writer.uint32(/* id 17, wireType 2 =*/138).string(message.hubid);
                    if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                        writer.uint32(/* id 18, wireType 2 =*/146).string(message.platform);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        writer.uint32(/* id 19, wireType 2 =*/154).string(message.createdAt);
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(/* id 20, wireType 2 =*/162).string(message.token);
                    if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                        writer.uint32(/* id 21, wireType 2 =*/170).string(message.comment);
                    if (message.fpversion != null && Object.hasOwnProperty.call(message, "fpversion"))
                        writer.uint32(/* id 22, wireType 2 =*/178).string(message.fpversion);
                    return writer;
                };

                /**
                 * Encodes the specified Customer message, length delimited. Does not implicitly {@link customers.get.response.Customer.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {customers.get.response.ICustomer} message Customer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Customer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Customer message from the specified reader or buffer.
                 * @function decode
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {customers.get.response.Customer} Customer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Customer.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.customers.get.response.Customer();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.firstname = reader.string();
                            break;
                        case 2:
                            message.lastname = reader.string();
                            break;
                        case 3:
                            message.dob = reader.string();
                            break;
                        case 4:
                            message.email = reader.string();
                            break;
                        case 5:
                            message.emailverified = reader.bool();
                            break;
                        case 6:
                            message.pincode = reader.string();
                            break;
                        case 7:
                            message.address1 = reader.string();
                            break;
                        case 8:
                            message.address2 = reader.string();
                            break;
                        case 9:
                            message.address3 = reader.string();
                            break;
                        case 10:
                            message.address4 = reader.string();
                            break;
                        case 11:
                            message.status = reader.string();
                            break;
                        case 12:
                            message.customerid = reader.int32();
                            break;
                        case 13:
                            message.fpaccountid = reader.int32();
                            break;
                        case 14:
                            message.pushid = reader.string();
                            break;
                        case 15:
                            message.mobile = reader.string();
                            break;
                        case 16:
                            message.id = reader.int32();
                            break;
                        case 17:
                            message.hubid = reader.string();
                            break;
                        case 18:
                            message.platform = reader.string();
                            break;
                        case 19:
                            message.createdAt = reader.string();
                            break;
                        case 20:
                            message.token = reader.string();
                            break;
                        case 21:
                            message.comment = reader.string();
                            break;
                        case 22:
                            message.fpversion = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Customer message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {customers.get.response.Customer} Customer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Customer.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Customer message.
                 * @function verify
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Customer.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.firstname != null && message.hasOwnProperty("firstname"))
                        if (!$util.isString(message.firstname))
                            return "firstname: string expected";
                    if (message.lastname != null && message.hasOwnProperty("lastname"))
                        if (!$util.isString(message.lastname))
                            return "lastname: string expected";
                    if (message.dob != null && message.hasOwnProperty("dob"))
                        if (!$util.isString(message.dob))
                            return "dob: string expected";
                    if (message.email != null && message.hasOwnProperty("email"))
                        if (!$util.isString(message.email))
                            return "email: string expected";
                    if (message.emailverified != null && message.hasOwnProperty("emailverified"))
                        if (typeof message.emailverified !== "boolean")
                            return "emailverified: boolean expected";
                    if (message.pincode != null && message.hasOwnProperty("pincode"))
                        if (!$util.isString(message.pincode))
                            return "pincode: string expected";
                    if (message.address1 != null && message.hasOwnProperty("address1"))
                        if (!$util.isString(message.address1))
                            return "address1: string expected";
                    if (message.address2 != null && message.hasOwnProperty("address2"))
                        if (!$util.isString(message.address2))
                            return "address2: string expected";
                    if (message.address3 != null && message.hasOwnProperty("address3"))
                        if (!$util.isString(message.address3))
                            return "address3: string expected";
                    if (message.address4 != null && message.hasOwnProperty("address4"))
                        if (!$util.isString(message.address4))
                            return "address4: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isString(message.status))
                            return "status: string expected";
                    if (message.customerid != null && message.hasOwnProperty("customerid"))
                        if (!$util.isInteger(message.customerid))
                            return "customerid: integer expected";
                    if (message.fpaccountid != null && message.hasOwnProperty("fpaccountid"))
                        if (!$util.isInteger(message.fpaccountid))
                            return "fpaccountid: integer expected";
                    if (message.pushid != null && message.hasOwnProperty("pushid"))
                        if (!$util.isString(message.pushid))
                            return "pushid: string expected";
                    if (message.mobile != null && message.hasOwnProperty("mobile"))
                        if (!$util.isString(message.mobile))
                            return "mobile: string expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.hubid != null && message.hasOwnProperty("hubid"))
                        if (!$util.isString(message.hubid))
                            return "hubid: string expected";
                    if (message.platform != null && message.hasOwnProperty("platform"))
                        if (!$util.isString(message.platform))
                            return "platform: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        if (!$util.isString(message.createdAt))
                            return "createdAt: string expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.comment != null && message.hasOwnProperty("comment"))
                        if (!$util.isString(message.comment))
                            return "comment: string expected";
                    if (message.fpversion != null && message.hasOwnProperty("fpversion"))
                        if (!$util.isString(message.fpversion))
                            return "fpversion: string expected";
                    return null;
                };

                /**
                 * Creates a Customer message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {customers.get.response.Customer} Customer
                 */
                Customer.fromObject = function fromObject(object) {
                    if (object instanceof $root.customers.get.response.Customer)
                        return object;
                    var message = new $root.customers.get.response.Customer();
                    if (object.firstname != null)
                        message.firstname = String(object.firstname);
                    if (object.lastname != null)
                        message.lastname = String(object.lastname);
                    if (object.dob != null)
                        message.dob = String(object.dob);
                    if (object.email != null)
                        message.email = String(object.email);
                    if (object.emailverified != null)
                        message.emailverified = Boolean(object.emailverified);
                    if (object.pincode != null)
                        message.pincode = String(object.pincode);
                    if (object.address1 != null)
                        message.address1 = String(object.address1);
                    if (object.address2 != null)
                        message.address2 = String(object.address2);
                    if (object.address3 != null)
                        message.address3 = String(object.address3);
                    if (object.address4 != null)
                        message.address4 = String(object.address4);
                    if (object.status != null)
                        message.status = String(object.status);
                    if (object.customerid != null)
                        message.customerid = object.customerid | 0;
                    if (object.fpaccountid != null)
                        message.fpaccountid = object.fpaccountid | 0;
                    if (object.pushid != null)
                        message.pushid = String(object.pushid);
                    if (object.mobile != null)
                        message.mobile = String(object.mobile);
                    if (object.id != null)
                        message.id = object.id | 0;
                    if (object.hubid != null)
                        message.hubid = String(object.hubid);
                    if (object.platform != null)
                        message.platform = String(object.platform);
                    if (object.createdAt != null)
                        message.createdAt = String(object.createdAt);
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.comment != null)
                        message.comment = String(object.comment);
                    if (object.fpversion != null)
                        message.fpversion = String(object.fpversion);
                    return message;
                };

                /**
                 * Creates a plain object from a Customer message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof customers.get.response.Customer
                 * @static
                 * @param {customers.get.response.Customer} message Customer
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Customer.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.firstname = "";
                        object.lastname = "";
                        object.dob = "";
                        object.email = "";
                        object.emailverified = false;
                        object.pincode = "";
                        object.address1 = "";
                        object.address2 = "";
                        object.address3 = "";
                        object.address4 = "";
                        object.status = "";
                        object.customerid = 0;
                        object.fpaccountid = 0;
                        object.pushid = "";
                        object.mobile = "";
                        object.id = 0;
                        object.hubid = "";
                        object.platform = "";
                        object.createdAt = "";
                        object.token = "";
                        object.comment = "";
                        object.fpversion = "";
                    }
                    if (message.firstname != null && message.hasOwnProperty("firstname"))
                        object.firstname = message.firstname;
                    if (message.lastname != null && message.hasOwnProperty("lastname"))
                        object.lastname = message.lastname;
                    if (message.dob != null && message.hasOwnProperty("dob"))
                        object.dob = message.dob;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.emailverified != null && message.hasOwnProperty("emailverified"))
                        object.emailverified = message.emailverified;
                    if (message.pincode != null && message.hasOwnProperty("pincode"))
                        object.pincode = message.pincode;
                    if (message.address1 != null && message.hasOwnProperty("address1"))
                        object.address1 = message.address1;
                    if (message.address2 != null && message.hasOwnProperty("address2"))
                        object.address2 = message.address2;
                    if (message.address3 != null && message.hasOwnProperty("address3"))
                        object.address3 = message.address3;
                    if (message.address4 != null && message.hasOwnProperty("address4"))
                        object.address4 = message.address4;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.customerid != null && message.hasOwnProperty("customerid"))
                        object.customerid = message.customerid;
                    if (message.fpaccountid != null && message.hasOwnProperty("fpaccountid"))
                        object.fpaccountid = message.fpaccountid;
                    if (message.pushid != null && message.hasOwnProperty("pushid"))
                        object.pushid = message.pushid;
                    if (message.mobile != null && message.hasOwnProperty("mobile"))
                        object.mobile = message.mobile;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.hubid != null && message.hasOwnProperty("hubid"))
                        object.hubid = message.hubid;
                    if (message.platform != null && message.hasOwnProperty("platform"))
                        object.platform = message.platform;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = message.createdAt;
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.comment != null && message.hasOwnProperty("comment"))
                        object.comment = message.comment;
                    if (message.fpversion != null && message.hasOwnProperty("fpversion"))
                        object.fpversion = message.fpversion;
                    return object;
                };

                /**
                 * Converts this Customer to JSON.
                 * @function toJSON
                 * @memberof customers.get.response.Customer
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Customer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Customer;
            })();

            return response;
        })();

        return get;
    })();

    return customers;
})();

module.exports = $root;
