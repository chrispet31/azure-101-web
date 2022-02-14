export interface Environment {
  baseUrl: string
}

const prod: Environment = {
  baseUrl: "https://funcapp-axwdam3eeso6c.azurewebsites.net",
}

export const environment: Environment = prod
