"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { ChatCompletionRequestMessage } from "openai";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "assistant";
  content: string;
}
interface MessageContentProps {
  content: string;
}

const apiKey = process.env.ON_DEMAND_API;
// console.log(process.env.ON_DEMAND_API);
const ondemand_key = "Sy9LgKyj5m1BEe52cVXvyJmjNCiNzZMh";

const MessageContent: React.FC<MessageContentProps> = ({ content }) => (
  <ReactMarkdown
    children={content}
    remarkPlugins={[remarkGfm]}
    className="whitespace-pre-wrap" // Ensure new lines are preserved
  />
);
const ConversationPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  // const [d, setData] = useState<string[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("clicked");

      const userMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];
      const data = {
        endpointId: "predefined-openai-gpt4o",
        query: values.prompt,
        pluginIds: [
          "plugin-1712327325",
          "plugin-1713962163",
          "plugin-1726285914",
          "plugin-1721988525",
          "plugin-1722685896",
          "plugin-1717416016",
          "plugin-1718189536",
          "plugin-1716434059",
          "plugin-1716411313",
        ],
        responseMode: "sync",
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          apikey: ondemand_key,
        },
      };
      const response = await axios.post(
        "https://api.on-demand.io/chat/v1/sessions/66e498833e1c55ac10fc27d7/query",
        data,
        config
      );

      // const res = JSON.stringify(response.data);
      // const res = JSON.parse(response.data);
      // let fullResponse = "";
      // // Append the "answer" part to the full response
      // if (res.answer) {
      //   fullResponse += res.answer;
      //   console.log(fullResponse);
      // }

      // console.log(res[1]);
      setMessages((currentMessages) => [
        ...currentMessages,
        userMessage,
        { role: "assistant", content: response.data.data.answer },
      ]);
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Who is father of ai?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversiont Started" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg ",
                  message.role === "user"
                    ? "bg-white border border-x-black/10"
                    : "bg-muted"
                )}
              >
                {message.role == "user" ? <UserAvatar /> : <BotAvatar />}
                <MessageContent content={message.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
