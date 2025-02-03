"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  topic: z.string().min(1, { message: "Please select a topic." }),
  otherTopic: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function GetInTouchMenu() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      otherTopic: "",
      message: "",
    },
  });

  const watchTopic = watch("topic");

  const handleEmail = () => {
    window.location.href = "mailto:contact@example.com";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", data);
    // Handle form submission here
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Choose how you'd like to connect with us
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-8 w-8 text-primary" />
              <Button onClick={handleEmail} className="w-full">
                Email
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="h-8 w-8 text-primary" />
              <Button onClick={handleWhatsApp} className="w-full">
                WhatsApp
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-8 w-8 text-primary" />
              <Button onClick={handleCall} className="w-full">
                Call
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input id="name" placeholder="John Doe" {...field} />
                )}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email Address</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Controller
                name="topic"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.topic && (
                <p className="text-sm text-red-500">{errors.topic.message}</p>
              )}
            </div>
            {watchTopic === "other" && (
              <div className="space-y-2">
                <Label htmlFor="otherTopic">Specify Topic</Label>
                <Controller
                  name="otherTopic"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="otherTopic"
                      placeholder="Enter your topic"
                      {...field}
                    />
                  )}
                />
                {errors.otherTopic && (
                  <p className="text-sm text-red-500">
                    {errors.otherTopic.message}
                  </p>
                )}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="message">Message Content</Label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="message"
                    placeholder="Enter your message here"
                    className="min-h-[100px]"
                    {...field}
                  />
                )}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
