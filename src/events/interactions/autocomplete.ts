import { Interaction } from "discord.js";
import Amayi from "../../structures/Amayi";
import { BotEvent } from "../../structures/Event";

export default class SlashCommandEvent extends BotEvent {
  constructor(client: Amayi) {
    super(client, {
      name: "interactionCreate"
    })
  }

  async run(interaction: Interaction): Promise<void> {
    if (!interaction.isAutocomplete()) return;
    const command = this.client.commands.get(interaction.commandName)
    if (!command) throw new Error(`${interaction.commandName} is not a valid command!`)
    await command.autocomplete(interaction)
  }
}