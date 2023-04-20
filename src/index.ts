import type {
  APIGatewayEventRequestContextV2,
  APIGatewayProxyEventV2WithRequestContext,
  APIGatewayProxyResultV2,
  Handler
} from 'aws-lambda'

export const handler: Handler = async (
  event: APIGatewayProxyEventV2WithRequestContext<APIGatewayEventRequestContextV2>
): Promise<APIGatewayProxyResultV2> => {
  return { statusCode: 200, body: event.body }
}
