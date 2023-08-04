<?php

namespace App\Notifications;

use App\Models\Exam;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\URL;
use Illuminate\Notifications\Messages\MailMessage;

class ExamCreatedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private Exam $exam;
    /**
     * Create a new notification instance.
     */
    public function __construct(Exam $exam)
    {
        $this->exam=$exam;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $signedUrl = URL::signedRoute('student.exam',['exam' => $this->exam->id,'student' => $notifiable->id]);
        return (new MailMessage)
                    ->line('New Exam All')
                    ->action('Click to Perform', $signedUrl)
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
