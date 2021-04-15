/**
 * @url https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 *
 * The following is a list of Hypertext Transfer Protocol (HTTP) response status codes. This includes codes from IETF
 * internet standards as well as other IETF RFCs, other specifications and some additional commonly used codes. The
 * first digit of the status code specifies one of five classes of response; the bare minimum for an HTTP client is
 * that it recognizes these five classes. The phrases used are the standard examples, but any human-readable
 * alternative can be provided. Unless otherwise stated, the status code is part of the HTTP/1.1 standard (RFC 7231).
 *
 * The Internet Assigned Numbers Authority (IANA) maintains the official registry of HTTP status codes.
 *
 * Microsoft IIS sometimes uses additional decimal sub-codes to provide more specific information, but these are
 * not listed here.
 */
class Status
{
  /*******************************************************************************************************************
   * Informational
   *
   * Request received, continuing process.
   *
   * This class of status code indicates a provisional response, consisting only of the Status-Line and optional
   * headers, and is terminated by an empty line. Since HTTP/1.0 did not define any 1xx status codes, servers must
   * not send a 1xx response to an HTTP/1.0 client except under experimental conditions.
   ******************************************************************************************************************/

  /**
   * This means that the server has received the request headers, and that the client should proceed to send the
   * request body (in the case of a request for which a body needs to be sent; for example, a POST request).
   * If the request body is large, sending it to a server when a request has already been rejected based upon
   * inappropriate headers is inefficient. To have a server check if the request could be accepted based on the
   * request's headers alone, a client must send `Expect: 100-continue` as a header in its initial request and check
   * if a `100 Continue` status code is received in response before continuing (or receive `417 Expectation Failed`
   * and not continue).
   */
  get PROCEED() {
    return 100;
  }

  /**
   * This means the requester has asked the server to switch protocols and the server is acknowledging that it
   * will do so.
   */
  get SWITCHING() {
     return 101;
  }

  /**
   * As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to complete
   * the request. This code indicates that the server has received and is processing the request, but no response is
   * available yet. This prevents the client from timing out and assuming the request was lost.
   */
  get PROCESSING() {
     return 102;
  }


  /*******************************************************************************************************************
   * Success
   *
   * This class of status codes indicates the action requested by the client was received, understood, accepted
   * and processed successfully.
   ******************************************************************************************************************/

  /**
   * Standard response for successful HTTP requests. The actual response will depend on the request method used. In
   * a GET request, the response will contain an entity corresponding to the requested resource. In a POST request,
   * the response will contain an entity describing or containing the result of the action.
   */
  get OK() {
     return 200;
  }

  /**
   * The request has been fulfilled and resulted in a new resource being created.
   */
  get CREATED() {
     return 201;
  }

  /**
   * The request has been accepted for processing, but the processing has not been completed. The request might or
   * might not eventually be acted upon, as it might be disallowed when processing actually takes place.
   */
  get ACCEPTED() {
     return 202;
  }

  /**
   * The server successfully processed the request, but is returning information that may be from another source.
   */
  get NA_INFO() {
     return 203;
  }

  /**
   * The server successfully processed the request, but is not returning any content. Usually used as a response to
   * a successful delete request.
   */
  get NO_CONTENT() {
     return 204;
  }

  /**
   * The server successfully processed the request, but is not returning any content. Unlike a 204 response, this
   * response requires that the requester reset the document view.
   */
  get RESET_CONTENT() {
     return 205;
  }

  /**
   * The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The
   * range header is used by tools like wget to enable resuming of interrupted downloads, or split a download into
   * multiple simultaneous streams.
   */
  get PARTIAL_CONTENT() {
     return 206;
  }

  /**
   * The message body that follows is an XML message and can contain a number of separate response codes, depending
   * on how many sub-requests were made.
   */
  get MULTI_STATUS() {
     return 207;
  }

  /**
   * The members of a DAV binding have already been enumerated in a previous reply to this request, and are not
   * being included again.
   */
  get ALREADY_REPORTED() {
     return 208;
  }

  /**
   * The server has fulfilled a request for the resource, and the response is a representation of the result of one
   * or more instance-manipulations applied to the current instance.
   */
  get IM_USED() {
     return 226;
  }


  /*******************************************************************************************************************
   * Redirection
   *
   * This class of status code indicates the client must take additional action to complete the request. Many of
   * these status codes are used in URL redirection.
   *
   * A user agent may carry out the additional action with no user interaction only if the method used in the second
   * request is GET or HEAD. A user agent should not automatically redirect a request more than five times, since
   * such redirection usually indicate an infinite loop.
   ******************************************************************************************************************/

  /**
   * Indicates multiple options for the resource that the client may follow. It, for instance, could be used to
   * present different format options for video, list files with different extensions, or word sense disambiguation.
   */
  get MULTIPLE_CHOICES() {
     return 300;
  }

  /**
   * This and all future requests should be directed to the given URI.
   */
  get MOVED() {
     return 301;
  }

  /**
   * This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945)
   * required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"),
   * but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added
   * status codes 303 and 307 to distinguish between the two behaviors. However, some Web applications and
   * frameworks use the 302 status code as if it were the 303.
   */
  get FOUND() {
     return 302;
  }

  /**
   * The response to the request can be found under another URI using a GET method. When received in response to a
   * POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be
   * issued with a separate GET message.
   */
  get OTHER() {
     return 303;
  }

  /**
   * Indicates that the resource has not been modified since the version specified by the request headers
   * If-Modified-Since or If-None-Match. This means that there is no need to retransmit the resource, since the
   * client still has a previously-downloaded copy.
   */
  get NOT_MODIFIED() {
     return 304;
  }

  /**
   * The requested resource is only available through a proxy, whose address is provided in the response. Many HTTP
   * clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code,
   * primarily for security reasons.
   */
  get USE_PROXY() {
     return 305;
  }

  /**
   * No longer used. Originally meant "Subsequent requests should use the specified proxy."
   */
  get SWITCH_PROXY() {
     return 306;
  }

  /**
   * In this case, the request should be repeated with another URI; however, future requests should still use the
   * original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be
   * changed when reissuing the original request. For instance, a POST request should be repeated using another
   * POST request.
   */
  get TEMP_REDIRECT() {
     return 307;
  }

  /**
   * The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel
   * the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form
   * to a permanently redirected resource may continue smoothly.
   */
  get PERM_REDIRECT() {
     return 308;
  }


  /*******************************************************************************************************************
   * Client Error
   *
   * The 4xx class of status code is intended for cases in which the client seems to have erred. Except when
   * responding to a HEAD request, the server should include an entity containing an explanation of the error
   * situation, and whether it is a temporary or permanent condition. These status codes are applicable to any
   * request method. User agents should display any included entity to the user.
   ******************************************************************************************************************/

  /**
   * The server cannot or will not process the request due to something that is perceived to be a client error
   * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
   */
  get BAD_REQUEST() {
     return 400;
  }

  /**
   * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
   * been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to
   * the requested resource. See Basic access authentication and Digest access authentication.
   */
  get UNAUTHORIZED() {
     return 401;
  }

  /**
   * Reserved for future use. The original intention was that this code might be used as part of some form of digital
   * cash or micro-payment scheme, but that has not happened, and this code is not usually used. YouTube uses this
   * status if a particular IP address has made excessive requests, and requires the person to enter a CAPTCHA.
   */
  get PAYMENT_REQUIRED() {
     return 402;
  }

  /**
   * The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized
   * response, authenticating will make no difference.
   */
  get FORBIDDEN() {
     return 403;
  }

  /**
   * The requested resource could not be found but may be available again in the future. Subsequent requests by the
   * client are permissible.
   */
  get NOT_FOUND() {
     return 404;
  }

  /**
   * A request was made of a resource using a request method not supported by that resource; for example, using GET
   * on a form which requires data to be presented via POST, or using PUT on a read-only resource.
   */
  get NOT_ALLOWED() {
     return 405;
  }

  /**
   * The requested resource is only capable of generating content not acceptable according to the Accept headers
   * sent in the request.
   */
  get NOT_ACCEPTABLE() {
     return 406;
  }

  /**
   * The client must first authenticate itself with the proxy.
   */
  get PROXY_AUTH_REQUIRED() {
     return 407;
  }

  /**
   * The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a
   * request within the time that the server was prepared to wait. The client MAY repeat the request without
   * modifications at any later time."
   */
  get REQUEST_TIMEOUT() {
     return 408;
  }

  /**
   * Indicates that the request could not be processed because of conflict in the request, such as an edit conflict
   * in the case of multiple updates.
   */
  get CONFLICT() {
     return 409;
  }

  /**
   * Indicates that the resource requested is no longer available and will not be available again. This should be
   * used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410
   * status code, the client should not request the resource again in the future. Clients such as search engines
   * should remove the resource from their indices. Most use cases do not require clients and search engines to purge
   * the resource, and a "404 Not Found" may be used instead.
   */
  get GONE() {
     return 410;
  }

  /**
   * The request did not specify the length of its content, which is required by the requested resource.
   */
  get LENGTH_REQUIRED() {
     return 411;
  }

  /**
   * The server does not meet one of the preconditions that the requester put on the request.
   */
  get PRECONDITION_FAILED() {
     return 412;
  }

  /**
   * The request is larger than the server is willing or able to process.
   */
  get ENTITY_TOO_LARGE() {
     return 413;
  }

  /**
   * The URI provided was too long for the server to process. Often the result of too much data being encoded as a
   * query-string of a GET request, in which case it should be converted to a POST request.
   */
  get URI_TOO_LONG() {
     return 414;
  }

  /**
   * The request entity has a media type which the server or resource does not support. For example, the client
   * uploads an image as image/svg+xml, but the server requires that images use a different format.
   */
  get UNSUPPORTED_MEDIA_TYPE() {
     return 415;
  }

  /**
   * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
   * For example, if the client asked for a part of the file that lies beyond the end of the file.
   */
  get RANGE_NOT_SATISFIABLE() {
     return 416;
  }

  /**
   * The server cannot meet the requirements of the Expect request-header field.
   */
  get EXPECTATION_FAILED() {
     return 417;
  }

  /**
   * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee
   * Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code
   * should be returned by tea pots requested to brew coffee.
   */
  get TEAPOT() {
     return 418;
  }

  /**
   * Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has
   * expired. It is used as an alternative to 401 Unauthorized in order to differentiate from otherwise authenticated
   * clients being denied access to specific server resources.
   */
  get AUTH_TIMEOUT() {
     return 419;
  }

  /**
   * Not part of the HTTP standard, but defined by Spring in the HttpStatus class to be used when a method failed.
   * This status code is deprecated by Spring.
   */
  get METHOD_FAILURE() {
     return 420;
  }

  /**
   * Not part of the HTTP standard, but returned by version 1 of the Twitter Search and Trends API when the client
   * is being rate limited. Other services may wish to implement the 429 Too Many Requests response code instead.
   */
  get CALM() {
     return 420;
  }

  /**
   * The request was directed at a server that is not able to produce a response
   * (for example because a connection reuse).
   */
  get MISDIRECTED() {
     return 421;
  }

  /**
   * The request was well-formed but was unable to be followed due to semantic errors.
   */
  get UNPROCESSABLE_REQUEST() {
     return 422;
  }

  /**
   * The resource that is being accessed is locked.
   */
  get LOCKED() {
     return 423;
  }

  /**
   * The request failed due to failure of a previous request (e.g., a PROPPATCH).
   */
  get FAILED_DEPENDENCY() {
     return 424;
  }

  /**
   * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
   */
  get UPGRADE_REQUIRED() {
     return 426;
  }

  /**
   * The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where
   * a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has
   * modified the state on the server, leading to a conflict."
   */
  get PRECONDITION_REQUIRED() {
     return 428;
  }

  /**
   * The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.
   */
  get TOO_MANY_REQUESTS() {
     return 429;
  }

  /**
   * The server is unwilling to process the request because either an individual header field, or all the header
   * fields collectively, are too large.
   */
  get HEADER_FIELDS_TOO_LARGE() {
     return 431;
  }

  /**
   * A Microsoft extension. Indicates that your session has expired.
   */
  get LOGIN_TIMEOUT() {
     return 440;
  }

  /**
   * Used in Nginx logs to indicate that the server has returned no information to the client and closed the
   * connection (useful as a deterrent for malware).
   */
  get NO_RESPONSE() {
     return 444;
  }

  /**
   * A Microsoft extension. The request should be retried after performing the appropriate action.
   */
  get RETRY_WITH() {
     return 449;
  }

  /**
   * A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access
   * to the given webpage.
   */
  get PARENTAL_CONTROLS() {
     return 450;
  }

  /**
   * Defined in the internet draft "A New HTTP Status Code for Legally-restricted Resources". Intended to be used
   * when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A
   * reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed.
   */
  get UNAVAILABLE_FOR_LEGAL_REASONS() {
     return 451;
  }

  /**
   * Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the
   * user's mailbox.
   *
   * The client is supposed to re-run the HTTP Auto-discovery protocol to find a better suited server.
   */
  get REDIRECT() {
     return 451;
  }

  /**
   * Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).
   */
  get HEADER_TOO_LARGE() {
     return 494;
  }

  /**
   * Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an
   * error page redirection.
   */
  get CERT_ERROR() {
     return 495;
  }

  /**
   * Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error
   * page redirection.
   */
  get NO_CERT() {
     return 496;
  }

  /**
   * Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in
   * a log and an error page redirection.
   */
  get HTTP_TO_HTTPS() {
     return 497;
  }

  /**
   * Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.
   */
  get TOKEN_EXPIRED() {
     return 498;
  }

  /**
   * Used in Nginx logs to indicate when the connection has been closed by client while the server is still
   * processing its request, making server unable to send a status code back.
   */
  get CLIENT_CLOSED() {
     return 499;
  }

  /**
   * Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).
   */
  get TOKEN_REQUIRED() {
     return 499;
  }


  /*******************************************************************************************************************
   * Server Errors
   *
   * The server failed to fulfil an apparently valid request.
   *
   * Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has
   * encountered an error or is otherwise incapable of performing the request. Except when responding to a HEAD
   * request, the server should include an entity containing an explanation of the error situation, and indicate
   * whether it is a temporary or permanent condition. Likewise, user agents should display any included entity to
   * the user. These response codes are applicable to any request method.
   ******************************************************************************************************************/

  /**
   * A generic error message, given when an unexpected condition was encountered and no more specific message
   * is suitable.
   */
  get INTERNAL_ERROR() {
     return 500;
  }

  /**
   * The server either does not recognize the request method, or it lacks the ability to fulfil the request.
   * Usually this implies future availability (e.g., a new feature of a web-service API).
   */
  get NOT_IMPLEMENTED() {
     return 501;
  }

  /**
   * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
   */
  get BAD_GATEWAY() {
     return 502;
  }

  /**
   * The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a
   * temporary state.
   */
  get SERVICE_UNAVAILABLE() {
     return 503;
  }

  /**
   * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
   */
  get GATEWAY_TIMEOUT() {
     return 504;
  }

  /**
   * The server does not support the HTTP protocol version used in the request.
   */
  get HTTP_VERSION_NOT_SUPPORTED() {
     return 505;
  }

  /**
   * Transparent content negotiation for the request results in a circular reference.
   */
  get VARIANT_ALSO_NEGOTIATES() {
     return 506;
  }

  /**
   * The server is unable to store the representation needed to complete the request.
   */
  get INSUFFICIENT_STORAGE() {
     return 507;
  }

  /**
   * The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported).
   */
  get LOOP_DETECTED() {
     return 508;
  }

  /**
   * This status code is not specified in any RFCs. Its use is unknown.
   */
  get BANDWIDTH_LIMIT_EXCEEDED() {
     return 509;
  }

  /**
   * Further extensions to the request are required for the server to fulfil it.
   */
  get NOT_EXTENDED() {
     return 510;
  }

  /**
   * The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to
   * control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before
   * granting full Internet access via a Wi-Fi hotspot).
   */
  get NETWORK_AUTH_REQUIRED() {
     return 511;
  }

  /**
   * This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure
   * and Cloudflare servers: "The 520 error is essentially a “catch-all” response for when the origin server returns
   * something unexpected or something that is not tolerated/interpreted (protocol violation or empty response)."
   */
  get UNKNOWN_ERROR() {
     return 520;
  }

  /**
   * This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network read
   * timeout behind the proxy to a client in front of the proxy.
   */
  get NETWORK_READ_TIMEOUT() {
     return 598;
  }

  /**
   * This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network connect
   * timeout behind the proxy to a client in front of the proxy
   */
  get NETWORK_CONNECT_TIMEOUT() {
     return 599;
  }
}
